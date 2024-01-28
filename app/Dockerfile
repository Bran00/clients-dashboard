FROM node:20 as builder

WORKDIR /app

ENV NODE_OPTIONS="--openssl-legacy-provider"

COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build
