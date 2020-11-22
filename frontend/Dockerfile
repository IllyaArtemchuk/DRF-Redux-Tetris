FROM node:14.1-alpine AS builder
WORKDIR /app/frontend
COPY package.json /app/frontend
RUN npm install
COPY . ./