# CashRegister

## How to deploy

### 1. Install Docker app in computer

### 2. Start docker containers

Get `master` branch of code

cd /path/to/codefolder

Add these variables to .env.example and assign them to proper port numbers.

APP_EXPOSED_PORT, MYSQL_EXPOSED_PORT, REDIS_EXPOSED_PORT

update these variables as below:

`DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=123456`

cp .env.example .env

$>chmod -R 0777 storage
$>chmod -R 0777 bootstrap/cache

$>docker run --rm -it -v $(pwd):/app my_php composer install
$>docker run --rm -it -v $(pwd):/app my_php php artisan key:generate

$>docker-compose up -d

Open phpmyadmin: http://localhost:88 and import data from the script at `data/laravel.sql`

localhost home page: http://localhost:{APP_EXPOSED_PORT} in your web browser.
Cash register page: http://localhost/products in your web browser.
