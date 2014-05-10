# transformer.string-to-number

[Transformer](http://github.com/jbenet/transformer) conversion: string to number

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo '432144.4321' | transform string number
432144.4321
```

### Javascript

```js
var transformer = require('dat-transformer');
var tStringToNumber = transformer('string', 'number');
tStringToNumber('432144.4321'); // 432144.4321
```
