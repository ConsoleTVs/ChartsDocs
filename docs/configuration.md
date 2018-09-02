# Configuration

[[toc]]

The library configuration is just for default parameters at the moment. Once you've published
the configuration, you'll need to edit the configuration file located at `config/charts.php`

At the moment the library default configuration file is the following.

```php
<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Default library used in charts.
    |--------------------------------------------------------------------------
    |
    | This value is used as the default chart library used when creating
    | any chart in the command line. Feel free to modify it or set it up
    | while creating the chart to ignore this value.
    |
    */
    'default_library' => 'Chartjs',
];
```

You can change any of the information provided here. Most of the options provide an explanation attached,
so changing things should not be hard.