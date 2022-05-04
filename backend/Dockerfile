FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npmmirror.com
EXPOSE 14240
CMD npm run dev
