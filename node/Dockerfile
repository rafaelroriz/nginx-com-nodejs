FROM node:15

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.7.0

# RUN apt-get update
RUN apt-get install -y wget
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin
RUN apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000
