FROM wordpress:6.6-php8.3-apache

COPY wordpress/wp-content/themes/ethan-dao-vanilla /usr/src/wordpress/wp-content/themes/ethan-dao-vanilla
COPY wordpress/wp-content/mu-plugins /usr/src/wordpress/wp-content/mu-plugins

RUN curl -fsSL https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar -o /usr/local/bin/wp \
    && chmod +x /usr/local/bin/wp \
    && chown -R www-data:www-data /usr/src/wordpress/wp-content

EXPOSE 80
