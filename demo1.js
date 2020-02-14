var Rectangel = /** @class */ (function () {
    function Rectangel(l, h) {
        this.length = l;
        this.height = h;
    }
    Rectangel.prototype.getArea = function () {
        var area = Number(this.length) * Number(this.height);
        return area;
    };
    Rectangel.prototype.getParameter = function (l, h) {
        return 2 * (l + h);
    };
    return Rectangel;
}());
var obj = new Rectangel(10, 20);
var area = obj.getArea();
console.log(area);
