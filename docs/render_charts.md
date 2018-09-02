# Render charts

[[toc]]

## Pass the variable to the view

To render charts, you'll need to pass the chart variable into a view.

```php
return view('sample_view', compact('chart'));
```

Or more commonly known as

```php
return view('sample_view', ['chart' => $chart]));
```

## Load the JS library

You need to make sure you loaded the library of javascript before you render the chart. Check out the [Supported Libraries](/docs/supported_libraries.html)

You can use the CDN provided by that page or use NPM / other method to load it.

## Render the container

To render the container you'll just need to call the `container()` method on the chart in the desired HTMl place.

```php
{!! $chart->container() !!}
```

## Render the script

You'll need to call the `script()` method contained in the chart to place the script tag. Make sure it's out of scope for frameworks
like **Vue**. A full example is provided below.

::: warning
Remember to load the chart library before rendering the script.
:::

```php
{!! $chart->script() !!}
```

## Sample HTML

This example uses vue to demostrate that it's posible to use a JS front-end framework with the library.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Chart with VueJS</title>

    </head>
    <body>
        <div id="app">
            {!! $chart->container() !!}
        </div>
        <script src="https://unpkg.com/vue"></script>
        <script>
            var app = new Vue({
                el: '#app',
            });
        </script>
        <script src=https://cdnjs.cloudflare.com/ajax/libs/echarts/4.0.2/echarts-en.min.js charset=utf-8></script>
        {!! $chart->script() !!}
    </body>
</html>
```

## The JS chart variable

Turns out you might want to make use of the chart while it's still there.

All charts are binded to a JS variable, by default, this variable is generated in the constructor, creating a random 25 characters long id with only lowercase alphabetic characters. This is the ID of the chart. If you ever need to modify the chart after it's rendered (eg: because you want to add, remove data) you may acces it in the following JS variable.

```js
window.{{ $chart->id }}
```
