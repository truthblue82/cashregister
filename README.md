# CashRegister

## How to deploy

Get `master` branch of code

cd /path/to/codefolder

Add these variables to .env.example and assign them to proper port numbers.

APP_EXPOSED_PORT, MYSQL_EXPOSED_PORT, REDIS_EXPOSED_PORT

cp .env.example .env

$>chmod -R 0777 storage
$>chmod -R 0777 bootstrap/cache

$>docker run --rm -it -v $(pwd):/app my_php composer install
$>docker run --rm -it -v $(pwd):/app my_php php artisan key:generate

$>docker-compose up -d
$>docker-compose ps

Surf localhos:{APP_EXPOSED_PORT} in your web browser.

## Using Passport for login

$>docker run --rm -it -v $(pwd):/app my_php composer require laravel/passport
$>docker run --rm -it -v $(pwd):/app my_php php artisan migrate
