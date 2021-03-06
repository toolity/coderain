const expect = require("expect.js");
const CodeRain = require("./coderain");

describe("CodeRain", function() {
    it("should generate random code consisting of uppercase letters", function() {
        const cr = new CodeRain("AAAAA");
        const code = cr.next();
        expect(code).to.match(/^[A-Z]{5}$/);
    });
    
    it("should generate random code consisting of lowercase letters", function() {
        const cr = new CodeRain("aaaaa");
        const code = cr.next();
        expect(code).to.match(/^[a-z]{5}$/);
    });
    
    it("should generate random code consisting of numbers", function() {
        const cr = new CodeRain("99999");
        const code = cr.next();
        expect(code).to.match(/^[0-9]{5}$/);
    });
    
    it("should generate random code consisting of uppercase letters and numbers", function() {
        const cr = new CodeRain("XXXXX");
        const code = cr.next();
        expect(code).to.match(/^[A-Z0-9]{5}$/);
    });
    
    it("should generate random code consisting of lowercase letters and numbers", function() {
        const cr = new CodeRain("xxxxx");
        const code = cr.next();
        expect(code).to.match(/^[a-z0-9]{5}$/);
    });
    
    it("should generate random code consisting of letters and numbers", function() {
        const cr = new CodeRain("#####");
        const code = cr.next();
        expect(code).to.match(/^[A-Za-z0-9]{5}$/);
    });
    
    it("should generate random code respecting quotes", function() {
        const cr = new CodeRain("'MAX'-XXX");
        const code = cr.next();
        expect(code).to.match(/^MAX-[A-Z0-9]{3}$/);
    });
    
    it("should count combinations of an alphabetic pattern", function() {
        const cr = new CodeRain("AAAAA");
        expect(cr.combinations()).to.eql(26*26*26*26*26);
    });
    
    it("should count combinations of a numeric pattern", function() {
        const cr = new CodeRain("99999");
        expect(cr.combinations()).to.eql(10*10*10*10*10);
    });
    
    it("should count combinations of a mixed pattern", function() {
        const cr = new CodeRain("AAA-999");
        expect(cr.combinations()).to.eql(26*26*26*10*10*10);
    });
    
    it("should count combinations of a pattern including quotes", function() {
        const cr = new CodeRain("'MAX'-XXX");
        expect(cr.combinations()).to.eql(36*36*36);
    });
});