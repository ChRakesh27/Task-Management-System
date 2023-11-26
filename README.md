# TASK MANAGER - Backend

## Getting started

#### Install required tools

- [Node.js](https://nodejs.org) (v18.x.x)
- [Angular](https://angular.io/guide/setup-local) (v16.x.x)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/products/docker-desktop/)

Core package used in the project

- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)

#### Clone the repo

```bash
git clone https://github.com/ChRakesh27/backendassignment.git
cd backendassignment
```

### Install dependencies

```bash
npm install
```

#### Run local server

Run start will start the server with nodemon in development mode. server start on `http://localhost:3000`

```bash
npm run start
```

### Run Docker in local machine

Run the below docker command to run mongo.

```bash
docker-compose up -d mongodb
```

To stop mongo docker container

```bash
docker-compose down
```
