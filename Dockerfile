FROM node:22-bookworm AS dev

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD npm start
