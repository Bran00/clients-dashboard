FROM node:20 as builder

WORKDIR /src/app

COPY package*.json ./

RUN npm cache clean --force

RUN npm install --legacy-peer-deps caniuse-lite@latest


RUN npm cache clean --force

COPY . .

RUN npm run build

FROM nginx:1.21

COPY --from=builder /src/app/dist/app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
