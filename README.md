# Node.js Fastify Typescript SQL Backend

Starter für ein Node.js-Backend mit Fastify, Typescript und SQL mit Prisma als ORM. Deployment via PM2.

## Projekt

Das Projekt ist ein Backend für eine Webanwendung. Es ist aufgebaut auf Node.js und Fastify und verwendet Typescript. Mittels Prisma kann auf eine Datenbank der Wahl zugegriffen werden. Das Deployment erfolgt mittels PM2.

## Tools

Das Backend ist auf folgenden Technologien aufgebaut:

- [Typescript](https://www.typescriptlang.org/)
- [Pm2 Prozess Manager](https://pm2.keymetrics.io/)
- [Node.js](https://nodejs.org/en/)
- [Fastify Framework](https://www.fastify.io/)
- [Prisma ORM](https://www.prisma.io/)

## Dokumentation

Die Dokumentation wird mittels Swagger automatisch generiert und steht unter `/docs` zur Verfügung.

## Entwicklung

Die Befehle sind im `scripts`-Teil der package.json zu finden. [Node.js](https://nodejs.org/en/) muss
installiert sein.

### Installation

```
npm -g pm2

npm install
```

### Entwickeln

```
npm run dev
```

### Bauen

```
npm run build
```

### Starten

```
npm run start
```

### Testen

```
npm run test
```

### Deployment

```
npm run deploy:staging

npm run deploy:prod
```