# Getting started

[[toc]]

Laravel Charts is a charting library for laravel, and it's the only PHP package that's able to generate unlimited combinations of charts out of the box.

This is because Chart's API is designed to be extensible and customizable, allowing any option in the JavaScript
library to be quickly used without effort.

Before we go any deep, let me show you how does an example chart look like.

## Screenshots

![Screenshot 1](https://image.prntscr.com/image/FDJCr7ywShKMUlFitEc_Ww.png)

## Why a Laravel library?

Turns out that the charts are mostly done in JavaScript nowadays, but the data they contain most likely comes from a database,
and Laravel is the one handling it. So the question is, should you use this library or go straight to a JavaScript one?

It depends... Using this library will still give you all the freedom you have to expect from a native JS library. This is due
the fact that you can interact with natively with the chart in diferent ways. First of all, it allows for customization with the
same API that the native one, and second, it stores the chart into a variable that you can still read and use in JavaScript.

If you still want to continue, head over the [installation](/docs/installation.html).