# Use the official, lightweight Nginx web server image
FROM nginx:alpine

# Copy our index.html file into the directory Nginx serves from
COPY ./index.html /usr/share/nginx/html/

# This is the new, crucial command:
# Tell Nginx to run in the foreground and not exit.
CMD ["nginx", "-g", "daemon off;"]
