# API/Ajax Charts

[[toc]]

If you ever need to load a chart over an Ajax request (and that's a good practice by the way) you can make use
of the `load()` and the `api()` methods that charts come with. This will come in handy as it will handle most crap for you.

Please note this will only work with modern browsers with the [fetch() API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

Loading charts over an API is a better smooth way to show the charts if the calculation of the chart values takes a long time to compute. The website will render and will show the chart in a loader state. Once the ajax request is successfull, it will load the chart with the recieved data.

## Building the chart

Use the `load()` method to add the API endpoint where the data will be fetched and decoded from a JSON format.

```php
$chart = new SampleChart;

$api = url('/test_data');

$chart->labels(['test1', 'test2', 'test3'])
    ->load($api)
```

## Building the API endpoint

Use the `api()` method on the chart instance to automatically generate an array with the response needed.

::: tip
Laravel transforms the array responses into a JSON response.
:::

```php
$chart = new SampleChart;

$chart->dataset('Sample Test', 'bar', [3,4,1]);
$chart->dataset('Sample Test', 'line', [1,4,3]);

return $chart->api();
```

## Update the chart after rendering

This feature has been implemented by the community member [@sardoj](https://github.com/sardoj)

It is possible to easily update the chart after rendering it, by using client side JS.

The API endpoint URL is accessible in the JS variable

```php
{{ $chart->id }}_api_url
```

To refresh the chart, a client side JS function is also available. To call you just need to pass it the refresh URL
where the data will come from.

```php
{{ $chart->id }}_refresh(url)
```

::: tip
With this method you can easily refresh data in all charts after selecting a data, or applying a filter. Very usefull when
your chart needs to display diferent information regarding to a user input.
:::

As an example, for a user to see a chart data between two dates, (consider the server side done already, if you have no idea how, this is a laravel route + controller method, so you can do anything) you would just do something like that:

```js
var original_api_url = {{ $chart->id }}_api_url;
{{ $chart->id }}_refresh(original_api_url + "?date_start=2019-01-01&date_end=2019-12-31");
```

For more information about the JS chart variable, see https://charts.erik.cat/render_charts.html#sample-html.
