FROM node:alpine
COPY . /app
WORKDIR /app
RUN cd /app/backend && npm install --registry=https://registry.npmmirror.com && npm run serve
EXPOSE 14240
RUN cd /app/frontend && npm install --registry=https://registry.npmmirror.com && npm run dev
EXPOSE 16240
# CMD npm run dev
