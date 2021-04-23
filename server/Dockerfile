FROM node:alpine

WORKDIR '/app'

COPY package.json .
#COPY package*.json ./

#RUN npm install



RUN npm install -g npm@7.9.0
RUN npm install react-scripts@latest

COPY . .

CMD ["npm", "run", "start"]


