set -ex
# SET THE FOLLOWING VARIABLES
# docker hub username
USERNAME=eu.gcr.io/famous-vehicle-221208
# image name
IMAGE=boxxer-client-testing
docker build -t $USERNAME/$IMAGE:latest -f Dockerfile.test .