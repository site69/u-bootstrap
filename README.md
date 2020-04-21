# u-Bootstrap

u-Bootstrap is a special [Bootstrap](https://github.com/twbs/bootstrap) build. It strips out all the javascript, content styles, components. And only provides the following:

1. Bootstrap [grid system classes](https://getbootstrap.com/docs/4.1/layout/grid/) without any additional prefixes;
2. All Bootstrap [utility classed](https://getbootstrap.com/docs/4.1/utilities/borders/), predixed with `u-` string.


## Example usage

```html
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
```

