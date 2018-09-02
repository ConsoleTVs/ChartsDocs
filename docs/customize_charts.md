# Customize charts

[[toc]]

## Generic customization

Charts accepts what's said to be the whole JS library API. That means that you can inject any option to the chart
configuration directly with PHP. For example, Imagine you want to set a generic config of the Echarts library. In
this example you'll see how to enable/disable the chart tooltip based on the API Echarts provide.

The specified option is: <https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.show>

You can use the `options()` method on the chart instance to setup any API settings you wish. As the API docs tell you,
you need to set to `true` or `false` the option found in `tooltip.show`. To do it, simply call the `options` with the settings.

::: tip
 The settings won't overwrite the old ones, in fact they merge, so you can call `options()` multiple times adding just the
 option you want without deleting the old ones.
:::

```php
$chart->options([
    'tooltip' => [
        'show' => true // or false, depending on what you want.
    ]
]);
```

Charts will automatically set the options up for you. You just need to relax and see your tooltip appear / disappear.

::: tip
Try using the presets done specifically for the library. They are most likely all you'll need.
:::

## Chart Presets :heart:

The presets are sort of like pre-build configuration. With them, you won't need to read or understand
the API of the JS library you're working with. In fact, it will do most of the job for you.

To call a preset, simply call the method. As an example, if a method `presetExampleMethod()` i present in your
library, you can then call it like so:

```php
$chart->presetExampleMethod(/* ... */);
```

The available presets differ depending on the JS library you're using. You can find the list of available presets below.

### Chartjs

| Parameter                                       | Description                                    |
| ----------------------------------------------- | ---------------------------------------------- |
| `minimalist(bool $display)`                     | Minalist chart display (Hide labels and axes). |
| `displayLegend(bool $legend)`                   | Display the chart legend.                      |
| `displayAxes(bool $axes, bool $strict = false)` | Set the bar width of the X Axis.               |
| `barWidth(float $width)`                        | Display the chart legend.                      |
| `title(string $title, int $font_size = 14, string $color = '#666', bool $bold = true, string $font_family = "'Helvetica Neue', 'Helvetica',  'Arial', sans-serif")`                            | Set the chart title.                           |

### Highcharts

| Parameter                                       | Description                                                         |
| ----------------------------------------------- | ------------------------------------------------------------------- |
| `displayAxes(bool $axes)`                       | Display the chart axes.                                             |
| `displayLegend(bool $legend)`                   | Display the chart legend.                                           |
| `labelsRotation(float $angle)`                  | Rotates the labels of the xAxis.                                    |
| `minimalist(bool $display = false)`             | Set the chart style to minimalist.                                  |
| `label(string $label)`                          | Set the highcharts yAxis label.                                     |
| `title(string $title)`                          | Set the chart title.                                                |
| `doughnut(int $size = 50)`                      | Shapes the pie chart into a doughnut. (this affects all pie charts) |

### Fusioncharts

| Parameter                                       | Description                                            |
| ----------------------------------------------- | ------------------------------------------------------ |
| `label(string $label)`                          | Set the chart label.                                   |
| `title(string $title, int $font_size = 16, string $color = '#3D4852', bool $bold = true, string $font_family = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif")`                           | Set the chart title.                                   |
| `subtitle(string $subtitle, int $font_size = 12, string $color = '#3D4852', bool $bold = true, string $font_family = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif")`              | Set the chart subtitle.                                |
| `export(bool $export, bool $client = true)`     | Determines if the chart should show the export button. |

### Echarts

| Parameter                                          | Description                                                         |
| -------------------------------------------------- | ------------------------------------------------------------------- |
| `displayLegend(bool $legend)`                      | Show or hide the chart legend.                                      |
| `tooltip(bool $tooltip)`                           | Show or hide the tooltip.                                           |
| `label(string $label)`                             | Set the chart label.                                                |
| `minimalist(bool $minimalist = true)`              | Show the minimalistic.                                              |
| `displayAxes(bool $display)`                       | Display the chart axes.                                             |
| `export(bool $export = true, string $title = ' ')` | ALlow to export the chart.                                          |
| `title(string $title, int $font_size = 14, string $color = '#666', bool $bold = true, string $font_family = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif")`                               | Set the chart title.                                                |