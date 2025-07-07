# Use Node 20 for Vite 7 compatibility
FROM node:20-alpine as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# NGINX for serving static files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
