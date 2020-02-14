var a;
var b;
var c;
var d;
var e = [1, "hello world", true];
var f = [1, 2, 3];
var firstName = "mark";
firstName = "Paul";
var lastName = "Watson";
var colorRed = 1;
var ColorGreen = 2;
var ColorYellow = 3;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Yellow"] = 2] = "Yellow";
})(color || (color = {}));
console.log(ColorGreen);
