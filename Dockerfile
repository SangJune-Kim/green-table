FROM node:14

WORKDIR /vegan_frontend/
COPY . /vegan_frontend/

RUN yarn install
RUN yarn build:ssg
CMD yarn start