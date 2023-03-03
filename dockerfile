FROM ubuntu:latest

RUN apt-get update && apt-get install -y nginx

COPY index.html /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]