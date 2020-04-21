# u-Bootstrap

u-Bootstrap is a special [Bootstrap](https://github.com/twbs/bootstrap) build. It strips out all the javascript, content styles, components. And only provides the following:

- Bootstrap [grid system classes](https://getbootstrap.com/docs/4.1/layout/grid/) without any additional prefixes;
- All Bootstrap [utility classed](https://getbootstrap.com/docs/4.1/utilities/borders/), prefixed with `u-` string.


## How to use

1. Download the latest release archive from the [Releases page](https://github.com/site69/u-bootstrap/releases). Chose a file with a `-dist` suffix. 
2. Unpack it and place in your project folder where appropriate.
2. Link to `bootstrap-grid.min.css` and `u-bootstrap.min.css` files in html.


## Example usage

```html
<html>
<head>
    ...
    <link rel="stylesheet" href="vendor/u-bootstrap/css/bootstrap-grid.css">
    <link rel="stylesheet" href="vendor/u-bootstrap/css/u-bootstrap.css">
    ...
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-12 co-sm-6 u-mb-5">
                <p class="u-text-center">
                    This is an u-Bootstrap markup example.
                <p>
            </div>
            <div class="col-12 co-sm-6">
                <div class="u-d-flex u-flex-column u-align-content-center">
                    <div>Item 1</div>
                    <div>Item 2</div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

