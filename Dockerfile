FROM node

WORKDIR /airbnb

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/dist
COPY ./packages/common/package.json ./packages/common/dist

RUN npm i -g yarn
RUN yarn install --production

COPY ./packages/server/dist ./packages/server/dist/
COPY ./packages/common/dist ./packages/common/dist/
COPY ./ormconfig.json .

WORKDIR ./packages/server

ENV NODE_ENV production

EXPOSE 80

CMD ["node","dist/index.js"]