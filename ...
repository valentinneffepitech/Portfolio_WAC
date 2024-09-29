# Use PHP with Apache as the base image
FROM php:8.2-apache

# Install Additional System Dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    curl \
    git \
    unzip \
    nodejs \
    npm

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Enable Apache mod_rewrite for URL rewriting
RUN a2enmod rewrite 

# Copy the SSL certificates to the container
COPY ./ssl/fullchain.pem /etc/ssl/certs/fullchain.pem
COPY ./ssl/privkey.pem /etc/ssl/private/privkey.pem

# Configure Apache to use the provided SSL certificates
RUN sed -i 's!SSLCertificateFile.*!SSLCertificateFile /etc/ssl/certs/fullchain.pem!g' /etc/apache2/sites-available/default-ssl.conf
RUN sed -i 's!SSLCertificateKeyFile.*!SSLCertificateKeyFile /etc/ssl/private/privkey.pem!g' /etc/apache2/sites-available/default-ssl.conf

# Add ServerName directive (replace 'your_domain.com' with your actual domain)
RUN echo "ServerName valentinneff.fr" >> /etc/apache2/sites-available/default-ssl.conf

RUN a2enmod ssl && a2ensite default-ssl

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql zip

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Copy the application code including composer.json and package.json
COPY . /var/www/html

# Set the working directory
WORKDIR /var/www/html

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


# Install Node.js dependencies
RUN npm install

# Set permissions for storage and bootstrap/cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
RUN chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

RUN chmod 777 -R ./storage

# Install project dependencies using Composer
RUN composer install

RUN npm i vite --save-dev
RUN npm run build

# Expose port 80 (http)
EXPOSE 80

# Expose port 443 (https)
EXPOSE 443

# Start Apache and Node.js
CMD ["apache2-foreground"]
