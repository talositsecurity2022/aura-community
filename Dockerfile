# Use the official, lightweight Nginx web server image
FROM nginx:alpine

# Copy ALL relevant web files (.html, .json, .js) into the web server's public directory.
# This is the critical fix.
COPY ./*.html /usr/share/nginx/html/
COPY ./*.json /usr/share/nginx/html/
COPY ./*.js /usr/share/nginx/html/
