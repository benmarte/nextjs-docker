# -*- mode: Python -*

k8s_yaml('./k8s/deployment.yaml')
docker_build('nextjs-in-docker', '.', live_update=[sync('.', '/app'),])
k8s_resource('nextjs-in-docker', port_forwards=3000)
