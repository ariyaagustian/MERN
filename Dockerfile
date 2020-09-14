# pull official base image
FROM node:current

RUN git clone -b MERN-API https://github.com/ariyaagustian/MERN.git

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

# install app dependencies
RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "start"]
