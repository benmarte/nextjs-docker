This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

- Kubernetes: https://kubernetes.io/releases/download/
- Minikube: https://minikube.sigs.k8s.io/docs/start/
- Skaffold: https://skaffold.dev/docs/install/#standalone-binary

## Run with Skaffold

- Run `minikube start`
- Run `skaffold dev --port-forward`
- Terminate via `skaffold delete`
- Delete cluster via `minikube delete`

## Build Docker Image

```
docker build -t nextjs-in-docker .
```

## Run Docker Image

We need to pass an environment variable to the docker run command using `-e NEXT_PUBLIC_[VARIABLE_NAME]` where `[VARAIBLE_NAME]` is the name of your variable. You can also use the `--env-file` flag to specify the `.env` file.

Passing environment variables via `-e`:

```
docker run -p 3000:3000 -e NEXT_PUBLIC_MESSAGE='from docker!' nextjs-in-docker
```

Passing environment variables via `--env-file`:

```
docker run -p 3000:3000 --env-file .env.development nextjs-in-docker
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
