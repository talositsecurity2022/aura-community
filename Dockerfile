# Use the official, lightweight Nginx web server image
FROM nginx:alpine

# Copy our index.html file into the directory Nginx serves from
COPY ./index.html /usr/share/nginx/html/
