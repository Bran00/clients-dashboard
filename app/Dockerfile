FROM node:20.11.0

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli
RUN rm -rf node_modules
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 4200

CMD ["npm", "install", "&&", "ng", "serve", "--host", "0.0.0.0"]