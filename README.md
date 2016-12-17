# coderain
a javascript library to genarate unique random codes

## Instalation

### Browser

Download [coderain.js](https://raw.githubusercontent.com/toolity/coderain/master/coderain.js) and include it in your HTML file:
```
<script src="coderain.js"></script>
```

### Node
```
$ npm install coderain
```

## Usage

First you need to create a new instance of `CodeRain` specifying a code pattern.
In the example we are going to generate codes consisting of 3 random uppercase
letters followed by a hyphen and 5 random digits.

```
var cr = new CodeRain("AAA-99999");
```

Then you can keep calling `next()` and it's guaranteed that generated codes are
unique, i.e. they don't repeat for given `CodeRain` instance.

For example to get an array of 1000 unique random codes:

```
var codes = [];
while (codes.length < 1000) {
    codes.push(cr.next());
}
```

### Patterns

| placeholder | possible characters                                              | description                              |
|-------------|------------------------------------------------------------------|------------------------------------------|
| `A`         | `ABCDEFGHIJKLMNOPQRSTUVWXYZ`                                     | uppercase letters                        |
| `a`         | `abcdefghijklmnopqrstuvwxyz`                                     | lowercase letters                        |
| `9`         | `0123456789`                                                     | digits                                   |
| `X`         | `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`                           | uppercase letters + digits               |
| `x`         | `abcdefghijklmnopqrstuvwxyz0123456789`                           | lowercase letters + digits               |
| `#`         | `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789` | uppercase and lowercase letters + digits |

If you would like to use reserved characters in you pattern you can quote it with
single quotes, for example:

`var xmasCodes = new CodeRain("'XMAS'-XXXXX")`

### Combinations

For every code pattern there is a maximum number of possible combinations. 
To get this number for your pattern just invoke `combinations()` on the CodeRain instance.

For example there are 10000 possible 4-digits codes (0000-9999):

```
var 4digitCodes = new CodeRain("9999");
4digitCodes.combinations(); // returns 10000
```

## License

Code released under the [MIT license](LICENSE).