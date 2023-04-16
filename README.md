## Description

Gateway Pos:  TypeScript + Cucumber +  NestJs + PrismaORM


## Prerequisites

- [Node.js](https://nodejs.org/en/) >= 18.0.0
- [Helm](https://helm.sh/docs/intro/quickstart/)
- [Docker](https://docs.docker.com/get-docker/)

## Installation

```bash
$ npm install
```

## Running the app local - Docker Compose

```bash
# Dcoker Compose run
$ docker-compose up --build
# Config .env
# example: DATABASE_URL=mongodb://pos:pos123@localhost:27017/posDatabase?authSource=admin
```

### Running the app local Selct Mode

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app local - Helm - Kubernetes

```bash
# Generate Image Docker
$ docker build . -t app-rest

# Directory Helm
$ cd helm/gateway-pos-app
# Helm Install
$ helm install gateway-pos-app .
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests gherkins cucumber
$ npm run test:ecommerce:backend:rest:features

# test coverage
$ npm run test:cov
```

