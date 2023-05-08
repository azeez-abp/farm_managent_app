FROM php:8.1.6-fpm 

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    # nodejs \
    # npm \ 
    jpegoptim optipng pngquant gifsicle \
    vim \
    nano \
    git\ 
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd

#  unzip \

#  curl 
RUN docker-php-ext-install mysqli pdo pdo_mysql

RUN  apt-get update  \
    && pecl install -o -f redis \
    && rm -rf /tmp/pear \
    && docker-php-ext-enable redis
# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
#RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl
#RUN docker-php-ext-configure gd --with-gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ --with-png-dir=/usr/include/
#RUN docker-php-ext-install gd

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -

RUN    apt-get update \
    &&apt-get install -y nodejs
#Add user for laravel application 
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www

# RUN composer install

# Copy existing application directory contents
COPY . /var/www/
RUN  chmod -R 755  /var/www/storage 
RUN  chmod -R 644 /var/www/bootstrap/cache 
#RUN chmod -R 755 /var/www/vendor  too long process

# Copy existing application directory permissions
COPY --chown=www:www . /var/www


# RUN chown -R www:www /var/www && \
#     chmod -R 755 /var/www/storage 
# && \
# chmod -R 644 bootstrap/cache -f && \
# chmod -R 755 vendor -f

# Set working directory
WORKDIR /var/www
# Change current user to www
USER www
# Expose port 9000 and start php-fpm server
EXPOSE 9000
#ENV  PORT = '8001'
ENTRYPOINT [ "docker/entry.sh" ]

CMD ["php-fpm"]


#@CMD  npm run dev && php artisan serve --host=0.0.0.0 --port=8001


##########################################################
# FROM node:18-alpine as node

# WORKDIR /var/wwww

# COPY . . 

# RUN npm install --global --across-env

# RUN npm install

# VOLUME var/www/node_modules