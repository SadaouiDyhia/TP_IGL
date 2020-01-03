FROM node:8
WORKDIR /ChangerGrp
COPY package.json* ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm","start"]
