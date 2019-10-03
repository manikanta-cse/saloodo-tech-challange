# Saloodo Tech Challenge

A demonstration project on building microservices and deploying to k8ns

It has two services, namely
```
    Random Num String Reverse Service (Microservice-1)
    String Reverse Service (Microservice-2)
```

User would hit the Microservice-1 with an input string and expected output should be reverse the input string and a random number.
Rather than overloading the Microservice-1,it will delegate the task of string reverse to Microservice-2, which returns only reversed string. Finally Microservice-1 aggregates the data and gives response with random number and reversed string for a given input


To perform build and deploy or local setup,do a git clone and change your working directory to project root directory
```bash
cd saloodo-tech-challenge
```

## Local Environment Setup (Non Dockerized Version)

Require Node JS Insatll with version -10.15.3
```bash
cd string-reverse-service
npm install && npm start
```
Navigate to localhost:8080/api/string/reverse/${inputString} to access API

Set an an environmental varaible, which will be required by below service to communicate for reverse string task delegation
```bash
export STRING_REVERSE_API_BASE_URI=localhost:8090
```

```bash
cd random-num-reverse-str-service
npm install && npm start
```
Navigate to localhost:8090/api/string/reverse/${inputString} to access API

## Local Environment Setup (Dockerized Version)

Require Docker to be installed on the machine, Node JS need to be installed because using the volumes i'm hooking up the container to project root directory

```bash
docker network create "api-network"
```

```bash
docker run -it -p 8090:8090 -v $(pwd):/var/www -w "/var/www" --network "api-network" --name "string-reverse-api" node:12.10.0-alpine sh
var/www # cd string-reverse-service
var/www # npm install && npm start
```

```bash
docker run -it -p 8080:8080 -v $(pwd):/var/www -w "/var/www" -e STRING_REVERSE_API_BASE_URI="string-reverse-api:8090" --network "api-network" --name "ran-num-rev-str-api" node:12.10.0-alpine sh
var/www # cd random-num-reverse-str-service
var/www # npm install && npm start
```


## Tests

```bash
cd random-num-reverse-str-service/ && npm test
cd string-reverse-service/ && npm test
```

## Build Docker Images

```bash
sh build.sh
```
## Deploy to k8ns

```bash
sh deploy.sh
```

## Notes on implementation
- Choosen Node JS as a runtime to build Restful microservices
- Choosen Docker as a container runtime
- Used Circuit Breaker for fault tolerance
- Added couple of end to end tests
- Used Minikube (cent os) as a container orchestrator
- Used API Gateway to route the traffic

