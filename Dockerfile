#stage 1
FROM node:14 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:1.21
COPY --from=node /app/dist/gerenciador-tarefas /usr/share/nginx/html
