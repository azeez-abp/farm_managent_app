#!/bin/bash
if [ [! -f 'vendor/autoload.php' ] ]
   
then  
    composer 'install --no-interaction --no-progress'
else 
     echo "Packages installed"
fi
echo "Wait for the next job in queue"
sleep 2
if [ [! -f '.env'] ]

then  
    echo "creating env file for env ${APP_ENV}"
    cp .env.exmaple .env
else 
    echo ".env detected"
fi
#chmod -R 755 storage
#echo "Wait for the next job in queue"
sleep 2
php artisan migrate
sleep 2
php artisan cache:clear
php artisan config:clear
php artisan route:clear

php artisan config:cache
sleep 2
php artisan key:generate

sleep 2

echo "Serving the  ${APP_NAME} application"

#php artisan serve 
#-host=0.0.0.0 --port=$PORT ---env=.env --verbose
#start php container
#sleep 3

#npm run build

sleep 3

#php artisan serve --host=0.0.0.0 --port=9000
if [ "$XDEBUG_ENABLED" == "false" ]; then
    sedi "s/\zend_extension/;zend_extension/g" /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini;
else
    export XDEBUG_CONFIG="remote_host=$XDEBUG_REMOTE_HOST";
fi;

# npm run dev
# sleep 3
# exec php-fpm;

exec docker-php-entrypoint "$@"
