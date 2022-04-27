# Alpine version is the minimal docker image based on Alpine Linux
FROM node:alpine

#sets the working directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ens ure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

#expose ports
EXPOSE 3001 

#provides commands to executing continer
CMD [ "npm", "start" ]
