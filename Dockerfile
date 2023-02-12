FROM node:19.6.0-alpine3.17@sha256:33b1776fe39dc085cb3706eb032848e98a8fe108f9fed3e617afbd68b556bf1e as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY  . .
RUN npm run build

FROM nginx:1.23.3-alpine-slim@sha256:60a7532e3b954c902cb651aa29a2c757c495e11c264368fdf77b139985b923c6
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]