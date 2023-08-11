# -*- mode: Python -*

k8s_yaml('./k8s/deployment.yaml')
k8s_resource('nextjs-in-docker', port_forwards=3000, resource_deps=['deploy'])
docker_build('nextjs-in-docker', '.')
