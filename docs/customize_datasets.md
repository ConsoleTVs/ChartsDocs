# Customize datasets

[[toc]]

## Generic customization

To customize any chart dataset, you can us ethe `options()` method, the same as the chart customization, but in this case
in the dataset instance. This will ensure the setting is for the dataset. Following the example, imagine you want to set
two dataset for your line chart. One will be red and the other blue. You can use the API docs to determine what option sets
the line color.

In Highcharts, the option is found here: <https://api.highcharts.com/highcharts/series.line.color>

Since the settings already go directly into the series that we're applying it to, we just need to do the following:

::: tip
 The settings won't overwrite the old ones, in fact they merge, so you can call `options()` multiple times adding just the
 option you want without deleting the old ones.
:::

```php
$chart->dataset('Sample', 'line', [1, 2, 3])->options([
    'color' => '#ff0000',
]);
```

::: tip
Try using the presets done specifically for the library. They are most likely all you'll need.
:::

## Dataset Presets :heart:

The presets are sort of like pre-build configuration. With them, you won't need to read or understand
the API of the JS library you're working with. In fact, it will do most of the job for you.

To call a preset, simply call the method. As an example, if a method `presetExampleMethod()` i present in your
library, you can then call it like so:

```php
$chart->dataset(/* ... */)->presetExampleMethod(/* ... */);
```

The available presets differ depending on the JS library you're using. You can find the list of available presets below.

### Chartjs

| Parameter                                       | Description                                         |
| ----------------------------------------------- | --------------------------------------------------- |
| `color($color)`                                 | Set the dataset border color.                       |
| `backgroundColor($color)`                       | Set the dataset background color.                   |
| `fill(bool $filled)`                            | Determines if the dataset is filled.                |
| `lineTension(float $tension)`                   | Set the chart line tension.                         |
| `dashed(array $dashed = [5])`                   | Set the line to a dashed line in the chart options. |

### Highcharts

| Parameter                                       | Description                                          |
| ----------------------------------------------- | ---------------------------------------------------- |
| `color($color)`                                 | Set the dataset color.                               |

### Fusioncharts

| Parameter                                       | Description                                          |
| ----------------------------------------------- | ---------------------------------------------------- |
| `color($color)`                                 | Set the dataset color.                               |

### Echarts

| Parameter                                       | Description                                          |
| ----------------------------------------------- | ---------------------------------------------------- |
| `color($color)`                                 | Set the dataset color.                               |

### Frappe

| Parameter                                       | Description                                          |
| ----------------------------------------------- | ---------------------------------------------------- |
| `color(string $color)`                          | Determines the color of the dataset.                 |

### C3

C3 uses CSS to customize the datasets. Sorry...