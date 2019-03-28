# Create charts

[[toc]]

## Create a chart class

Creating a chart is very easy. All you need to do is call the following command while you're in your project's folder.

```
php artisan make:chart {Name} {Library?}
```

| Parameter   | Description |
| ----------- | ------------- |
| **`name`** | Determines the name of the chart you're willing to create. Try to refer to what the chart is actually going to do, for example `LatestUsers` or `MontlyViews`, etc |
| **`Library`** | *Optional* parameter that refers to the library that you're willing to use as a front-end for the chart. This is important because Charts will load the presets and configuration corresponding to that chart. If this parameter is not specified, the one from the default config will be used. Possible values are explained in the [supported libraries](/supported_libraries.html).      |

Once you run the command, a new file will be placed under `app\Charts` with the file name the same as the `name` parameter followed
by the typical `.php` extension.

This fill will contain a bare-bones chart class that will be used for everything.

## Initiate a chart

To initiate a chart you'll need to create a new instance of the chart class created previously. That way, you'll be able to use the
all the settings and presets specially crafted for the selected library.

To create a new instance you'll simply call the `new` operation in PHP. Example as follows:

::: warning
The following example makes use of `SampleChart` as if it was the name of the chart you created. Make sure to replace it
when you use it.
:::

```php
use App\Charts\SampleChart;

// ...

$chart = new SampleChart;
```

You can create and store as many instances of the chart as you want. Each one will be rendered in a diferent container as they
will each have a unique ID.

## Add the chart labels

To add the chart labels (The X axis sort of speaking) you'll need to call the `labels()` method on the chart instance.

```php
$chart->labels(['One', 'Two', 'Three']);
```

The number of labels should match each dataset number of values.

## Charts API

The charts API is as follows:

| Parameter                                    | Description                                                                                   |
| -------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dataset(string $name, string $type, $data)`     | Adds a new dataset to the chart.                                                              |
| `labels($labels)`                                | Set the chart labels.                                                                         |
| `options($options, bool $overwrite = false)`     | Set the chart options.                                                                        |
| `container(string $container = null)`            | Set the chart container (if you need your own view). Display the view if no parameter is set. |
| `script(string $script = null)`                  | Set the chart script. (if you need your own view). Display the view if no parameter is set.   |
| `type(string $type)`                             | Force a chart type, if not set, the first dataset type found will be used.                    |
| `height(int $height)`                            | Set the chart height. Null / 0 by default = auto.                                             |
| `width(int $width)`                              | Set the chart width. Null / 0 by default = auto                                               |
| `setScriptAttribute(string $key, string $value)` | Set an attribute for the <script> tag. eg: nonce="someRandomString"                                               |
| `loader(bool $loader)`                           | Determines if the chart loader should be displayed. Default to true                           |
| `loaderColor(string $color)`                     | Set the chart loader color. Default: #22292F.                                                 |
| `reset()`                                        | Reset the chart options.                                                                      |
