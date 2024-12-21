var pt = {
    x: 1,
    y: 2,
};
var p2t = {
    x: 23,
    y: 34,
};
var thomas = {
    id: 222,
    first: "Thomas",
    last: "Hardy",
};
thomas.first = "Thomas2";
var ali = {
    nationaCode: 2,
    name: "Ali",
    lastName: "Moradi",
    sayHi: function () {
        return "Hello";
    },
};
var shoes = {
    name: "Blue Nike Shoes",
    price: 200,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        return newPrice;
    },
};
console.log(shoes.applyDiscount(0.4));
