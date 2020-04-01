# 网站变灰

## 网站变为黑白色

- CSS

``` css
/* 方法一 */
* {
    -moz-filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    filter: gray; /* IE6-9 */
    filter: grayscale(100%);
}
/* 方法二 */
body {
  /* IE */
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);

  /* Chrome, Safari */
  -webkit-filter: grayscale(1);

  /* Firefox */
  filter: grayscale(1);
}
```

- JavaScript

```js
(function () {
  var body = document.body;
  body.style['filter'] = 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)';
  if (!body.style['filter']) {
    body.style['-webkit-filter'] = 'grayscale(1)';
    body.style['filter'] = 'grayscale(1)';
  }
}());
```
