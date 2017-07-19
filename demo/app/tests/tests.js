var Imageoptimize = require("nativescript-imageoptimize").Imageoptimize;
var imageoptimize = new Imageoptimize();

describe("greet function", function() {
    it("exists", function() {
        expect(imageoptimize.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(imageoptimize.greet()).toEqual("Hello, NS");
    });
});