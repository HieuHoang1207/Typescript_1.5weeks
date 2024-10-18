//boolean
let active = true;
console.log(active);
//number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
console.log(decimal, hex, binary, octal);
//string
let color = "blue";
let sentence = `The color is ${color}`;
console.log(color);
//array
let list = [1, 2, 3];
let list2 = [4, 5, 6];
let list3 = [1, 2, 3];
let list4 = [1, 2, 3];
console.log(list3, list4);
//tuble
let y;
y = [12, "123"];
console.log(y);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Grenn"] = 2] = "Grenn";
})(Color || (Color = {}));
let color1 = Color.Grenn;
console.log(color1);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 10] = "Red";
    Color1[Color1["Blue"] = 20] = "Blue";
    Color1[Color1["Grenn"] = 30] = "Grenn";
})(Color1 || (Color1 = {}));
let color3 = Color1.Red;
let color2 = Color1[30];
console.log(color3);
console.log(color2);
//unknown
let notSure = 4;
notSure = "maybe a string instead";
if (typeof notSure === "number") {
    console.log(notSure); // OK
}
else {
    console.log(notSure);
}
//any
let looselyTyped = 4;
looselyTyped = "now a string";
looselyTyped = { name: "John" }; // OK
console.log(looselyTyped);
//void
function warnUser() {
    console.log("This is a warning message");
}
warnUser();
//object
let user = {
    name: "Alice",
    age: 25,
};
console.log(user);
//null,undefined
let u = undefined;
let n = null;
console.log(u, n);
//never
function error(message) {
    throw new Error(message); // Hàm này ném lỗi và không bao giờ kết thúc một cách bình thường.
}
// error("Something went wrong!"); // Gọi hàm này sẽ ném lỗi và chương trình kết thúc tại đây.
function infiniteLoop() {
    while (true) {
        console.log("This will loop forever!");
    }
}
// infiniteLoop(); // Chương trình sẽ bị kẹt trong vòng lặp vô tận và không bao giờ thoát ra.
let d = null;
console.log(typeof d); // 'object'
//# sourceMappingURL=var.js.map