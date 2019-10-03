#!/bin/bash
set -o nounset
set -o errexit

kube_version=$(kubectl version)
echo "$kube_version"

if [[ $kube_version == *"Server"* ]]; then
   echo "kube found on machine"
   echo "starting to deploy..."
   kubectl apply -f ./k8s-manifests
   echo "deployment is done"
else
    echo  "kube not found on machine, so exiting!"
    exit 1
fi
