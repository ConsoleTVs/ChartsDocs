# Adding datasets

[[toc]]

## Explanation

To add a dataset to a chart, you'll just need to call the `dataset()` method.

The following is the description of the method followed by an explanation.


```php
$chart->dataset(string $name, string $type, $data);
```

| Parameter   | Description |
| ----------- | ------------- |
| **`$name`** | Determines the name of the dataset. This is mostly used as a legend reference in the rendered chart |
| **`$type`** | Determines the type of dataset you're creating. Refer to the [Supported libraries](/supported_libraries.html) to learn more. This parameter depends on the chosen library.      |
| **`$data`** | Determines the data points. It have to be an array of numbers or a collection of numbers.      |

Example calls are as follows

::: warning
The `$type` of the example are generic. They should correspond to the chosen library. Refer to the [Supported libraries](/supported_libraries.html) to learn more.
:::

```php
$chart->dataset('My dataset 1', 'line', [1, 2, 3, 4]);
$chart->dataset('My dataset 1', 'line', collect([1, 2, 3, 4]));
```

The fact that Charts accept a collection makes it easy for you to use your *database* as an input for the 3rd argument.
Due the fact that laravel's eloquent retrieves the result in collections, passing the result is as easy as follows.

## Simple Example

```
php artisan make:chart SampleChart Chartjs
```

```php
// ...

use App\Charts\SampleChart;

// ...

$chart = new SampleChart;
$chart->labels(['One', 'Two', 'Three', 'Four']);
$chart->dataset('My dataset', 'line', [1, 2, 3, 4]);
$chart->dataset('My dataset 2', 'line', [4, 3, 2, 1]);
```

## Database (Eloquent) example

We'll be using the default laravel users table for this demo.

```
php artisan make:chart SampleChart Chartjs
```

```php
// ...

use App\User;
use App\Charts\SampleChart;

// ...

$today_users = User::whereDate('created_at', today())->count();
$yesterday_users = User::whereDate('created_at', today()->subDays(1))->count();
$users_2_days_ago = User::whereDate('created_at', today()->subDays(2))->count();

$chart = new SampleChart;
$chart->labels(['2 days ago', 'Yesterday', 'Today']);
$chart->dataset('My dataset', 'line', [$users_2_days_ago, $yesterday_users, $today_users]);
```

A more practical aproach is to use a simple loop to do the job.

```php
// ...

use App\User;
use App\Charts\SampleChart;

// ...

$data = collect([]); // Could also be an array

for ($days_backwards = 2; $days_backwards >= 0; $days_backwards--) {
    // Could also be an array_push if using an array rather than a collection.
    $data->push(User::whereDate('created_at', today()->subDays($days_backwards))->count());
}

$chart = new SampleChart;
$chart->labels(['2 days ago', 'Yesterday', 'Today']);
$chart->dataset('My dataset', 'line', $data);
```

## Database (Eloquent) example 2

Using the default laravel users table, imagine you add a column called age. This column willl tell the age of the person. eg. `25`.
(Yes, I know it's a bad way to store this, but keep an eye why I want a number).

```
php artisan make:chart SampleChart Chartjs
```

```php
// ...

use App\User;
use App\Charts\SampleChart;

// ...

$data = User::groupBy('age')
    ->get()
    ->map(function ($item) {
        // Return the number of persons with that age
        return count($item);
    });

$chart = new SampleChart;
$chart->labels($data->keys());
$chart->dataset('My dataset', 'line', $data->values());
```

This example will return aline chart with all the persons in each available age.