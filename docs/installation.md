# Installation

[[toc]]

To install Laravel Charts you'll need **composer**. Laravel charts require no other dependency so it's really lightweight.

## Composer

To install it using composer type the following command in your laravel's root folder.

```
composer require consoletvs/charts:6.*
```

This will install laravel charts into your existing project.

## Service provider

::: tip
If you're using **Laravel 5.5 or higher** you can skip this step
:::

Register the service provider in thefile located at: `app/config.php` in the `providers` key.

```php
ConsoleTVs\Charts\ChartsServiceProvider::class,
```

## Default Configuration

To publish the default configuration for the library, you'll need to run the following command in the project folder.

```
php artisan vendor:publish --tag=charts_config
```