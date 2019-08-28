FROM nginx:stable
MAINTAINER Agatha Rachmadika  "agatha@alterra.id"

RUN mkdir -p /ReactEcommerce
RUN mkdir -p /ReactEcommerce/logs/nginx

COPY default.conf /etc/nginx/conf.d/
COPY . /ReactEcommerce

WORKDIR /ReactEcommerce
