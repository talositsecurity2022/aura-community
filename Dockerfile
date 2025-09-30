# Use the official, lightweight Nginx web server image
FROM nginx:alpine

# Copy our index.html file into the web server's public directory
COPY ./index.html /usr/share/nginx/html/
