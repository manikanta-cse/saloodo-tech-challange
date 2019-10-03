# Saloodo Tech Challenge

A project to demonstrate building microservices and deploying to k8ns

It has two services
```
    Random Num String Reverse Service (Microservice-1)
    String Reverse Service (Microservice-2)
```

User would hit the Microservice-1 and it will delegate the task of string reverse to Microservice-2. Finally it aggregates the data and gives response with random number and reversed string for a given input


To perform build and deploy or local setup,do a git clone and change your working directory to root project directory and run the below commands

```bash
cd saloodo-tech-challenge
```

## Local Environment Setup (Non Dockerized Version)

Require Node JS Insatll with version -10.15.3
```bash
cd random-num-reverse-str-service
npm install && npm start
```
```bash
cd string-reverse-service
npm install && npm start
```

## Local Environment Setup (Dockerized Version)

Require Docker to be installed on the machine, Node JS need to be installed because using the volumes i'm hooking up the container to project root directory

```bash
docker run -it -p 8080:8080 -v $(pwd):/var/www -w "/var/www" node:12.10.0-alpine sh
var/www # cd random-num-reverse-str-service
var/www # npm install && npm start
```
```bash
docker run -it -p 8090:8090 -v $(pwd):/var/www -w "/var/www" node:12.10.0-alpine sh
var/www # cd string-reverse-service
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

