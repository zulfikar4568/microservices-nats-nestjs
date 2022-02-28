# Simple NATS Nest js Microservices
<p align="center">
  <a href="./images/MicroservicesNATSNestjs.svg" target="blank"><img src="./images/MicroservicesNATSNestjs.svg" alt="Image" /></a>
</p>

### Running NATS Server
```bash
docker run --name nats-server -p 4222:4222 -p 6222:6222 -p 8222:8222 nats:latest
```

Open 3 terminal to run application

### Running API Gateway
```bash
cd api-gateway
npm run start:dev
```

### Running Billing Microservice
```bash
cd billing
npm run start:dev
```

### Running Auth Microservice
```bash
cd auth
npm run start:dev
```

### Create Request POST to gateway
```bash
sudo apt-get install curl

curl -X POST http://localhost:3000/ \
   -H 'Content-Type: application/json' \
   -d '{ "userId": "123", "price": 12.323 }'
```

## How this app is made
dependencies
```
npm install @nestjs/microservices nats
```