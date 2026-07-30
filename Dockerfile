FROM wordpress:6.6-php8.3-apache

COPY wordpress/wp-content/themes/ethan-dao-vanilla /usr/src/wordpress/wp-content/themes/ethan-dao-vanilla
COPY wordpress/wp-content/mu-plugins /usr/src/wordpress/wp-content/mu-plugins

RUN chown -R www-data:www-data /usr/src/wordpress/wp-content

EXPOSE 80
