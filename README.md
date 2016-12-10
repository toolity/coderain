# coderain
a javascript library to genarate unique random codes


### Usage

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

| placeholder | possible characters                    | description                |
|-------------|----------------------------------------|----------------------------|
| `A`         | `ABCDEFGHIJKLMNOPQRSTUVWXYZ`           | uppercase letters          |
| `a`         | `abcdefghijklmnopqrstuvwxyz`           | lowercase letters          |
| `9`         | `0123456789`                           | digits                     |
| `X`         | `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789` | uppercase letters + digits |
| `x`         | `abcdefghijklmnopqrstuvwxyz0123456789` | lowercase letters + digits |

If you would like to use reserved characters in you pattern you can quote it with
single quotes, for example:

`var xmasCodes = new CodeRain("'XMAS'-XXXXX")`


### License

Code released under the [MIT license](LICENSE).