;(function() {
    var placeholders = {
        "A": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "a": "abcdefghijklmnopqrstuvwxyz",
        "9": "0123456789",
        "X": "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        "x": "abcdefghijklmnopqrstuvwxyz0123456789",
        "#": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    }

    function randomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    function randomElem(array) {
        return array[randomInt(array.length)];
    }

    function randomCode(pattern) {
        var code = "";
        var quote = "'";
        var quoteOpen = false;
        pattern.split("").forEach(function(c) {
            if (!quoteOpen) {
                if (placeholders[c]) {
                    code += randomElem(placeholders[c]);
                } else if (c === quote) {
                    quoteOpen = true;
                } else {
                    code += c;
                }
            } else {
                if (c === quote) {
                    quoteOpen = false;
                } else {
                    code += c;
                }
            }
        });
        return code;
    }
    
    function CodeRain(pattern) {
        var cache = {};
        var maxAttempts = 0xBAD;
        this.next = function() {
            var attempt = 0;
            
            do {
                var code = randomCode(pattern);
            } while (cache[code] && ++attempt < maxAttempts);
            
            cache[code] = true;
            
            if (attempt === maxAttempts) {
                throw new Error("CodeRain: cannot generate next unique code.")
            }
            
            return code;
        }
        this.reset = function() {
            cache = {};
        }
    }

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = CodeRain;
        }
        exports = CodeRain;
    } else {
        this.CodeRain = CodeRain;
    }
    
}).call(this);