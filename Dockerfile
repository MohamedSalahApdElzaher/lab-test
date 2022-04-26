FROM node:alpine

WORKDIR /app

# Install app dependencies
# A wildcard is used to ens ure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]