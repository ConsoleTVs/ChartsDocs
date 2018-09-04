# Supported libraries

[[toc]]

Laravel Charts provides diferent front-end libraries to create the chart with.

You'll need to import the one you want to make use of.

::: warning
Only the basic charts where tested during the development of the library. Meaning that `line, area, bar, pie` will probably work fine on all of them.
90% of the time is what you'll need :D
:::

## Chartjs (> 2.7.1)

Chartjs is often one of the most chosen JS library. It's good but it lacks on a lot of places in my opinion.

### Library name

The library name is used as a reference to create charts.

`Chartjs`

### CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js" charset="utf-8"></script>
```

### Supported chart types

To see a list of what Chartjs supports, check out <https://www.chartjs.org/docs/latest/charts/>

## Highcharts (> 6.0.6)

Highcharts is among the other popupar libraries. It have great support for large datasets. You'll need a license
depending on the usage you'll make of it.

### Library name

The library name is used as a reference to create charts.

`Highcharts`

### CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/6.0.6/highcharts.js" charset="utf-8"></script>
```

### Supported chart types

To see a list of what Highcharts supports, check out <https://www.highcharts.com/docs/chart-and-series-types/chart-types/>

## Fusioncharts (> 3.12.2)

Fusioncharts is also like highcharts, just a different flavour. You'll need a license
depending on the usage you'll make of it.

### Library name

The library name is used as a reference to create charts.

`Fusioncharts`

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/fusioncharts@3.12.2/fusioncharts.js" charset="utf-8"></script>
```

### Supported chart types

To see a list of what Fusioncharts supports, check out <https://www.fusioncharts.com/dev/chart-guide/standard-charts/line-area-and-column-charts>

## Echarts (> 4.0.2)

Echarts in the other hand is a great library. It have a lot of customization and support for long datasets. It also have
an easy API.

### Library name

The library name is used as a reference to create charts.

`Echarts`

### CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.0.2/echarts-en.min.js" charset="utf-8"></script>
```

### Supported chart types

To see a list of what Echarts supports, check out <https://ecomfe.github.io/echarts-doc/public/en/option.html>

## Frappe (> 1.1.0)

Frappe is a great library to show some cool charts!

### Library name

The library name is used as a reference to create charts.

`Frappe`

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/frappe-charts@1.1.0/dist/frappe-charts.min.iife.js"></script>
```

### Supported chart types

-   `line`
-   `bar`
-   `pie`
-   `progress`

More info here: <https://frappe.io/charts/>

## C3 (> 0.6.7)

Although C3 is still in development, charts supports it. Few dataset options are provided since all
customization is mainly done in pure CSS.

### Library name

The library name is used as a reference to create charts.

`C3`

### CDN

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.6.7/c3.min.js"></script>
```

### Supported chart types

More info here: <https://c3js.org/examples.html>