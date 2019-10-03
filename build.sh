#!/bin/bash
set -o nounset
set -o errexit

docker_version=$(docker -v)
echo "$docker_version"

string_reverse_image="string-reverse"
random_num_rev_str_image="random-num-reverse-str"

if [[ $docker_version == *"build"* ]]; then
   echo "docker found on machine"
   echo "starting to build images..."
   docker build -t $string_reverse_image ./string-reverse-service
   docker build -t $random_num_rev_str_image ./random-num-reverse-str-service
   echo "images pushed to your local registry"
else
    echo  "docker not found on machine, so exiting!"
    exit 1
fi
