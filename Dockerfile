# Use the official, lightweight Nginx web server image
FROM nginx:alpine

# Copy ALL relevant web files from the repository into the web server's public directory.
COPY . /usr/share/nginx/html
