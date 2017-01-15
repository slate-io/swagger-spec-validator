FROM google/nodejs
MAINTAINER Brandon Him
ENV REFRESHED_AT 2017-01-14

LABEL authors="Jason Walsh, Brandon Him"

RUN npm install -g gulp

COPY . /app

WORKDIR /app

CMD [ "gulp" ]
