FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install --silent
RUN npm install -g serve --silent

COPY . .

CMD ["npm", "start"]

#RUN mkdir -p /usr/src/react-app
#
#WORKDIR /usr/src/react-app
#
#ENV PATH /usr/src/react-app/node_modules/.bin:$PATH
#
#RUN npm install --silent
#RUN npm install react-scripts -g --silent
#RUN npm install serve -g --save
#
#COPY . /usr/src/react-app
#
#CMD ["npm", "start"]