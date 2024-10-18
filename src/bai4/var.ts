//boolean
let active: boolean = true;
console.log(active);
//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal, hex, binary, octal);
//string
let color: string = "blue";
let sentence: string = `The color is ${color}`;
console.log(color);
//array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];

let list3: number[] = [1, 2, 3];
let list4: Array<number> = [1, 2, 3];
console.log(list3, list4);
//tuble
let y: [number, string];
y = [12, "123"];
console.log(y);
//enum
enum Color {
  Red,
  Blue,
  Grenn,
}
let color1: Color = Color.Grenn;
console.log(color1);
enum Color1 {
  Red = 10,
  Blue = 20,
  Grenn = 30,
}
let color3: Color1 = Color1.Red;
let color2: string = Color1[30];
console.log(color3);
console.log(color2);
//unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";

if (typeof notSure === "number") {
  console.log(notSure); // OK
} else {
  console.log(notSure);
}
//any
let looselyTyped: any = 4;
looselyTyped = "now a string";
looselyTyped = { name: "John" }; // OK
console.log(looselyTyped);
//void
function warnUser(): void {
  console.log("This is a warning message");
}
warnUser();
//object
let user: { name: string; age: number } = {
  name: "Alice",
  age: 25,
};
console.log(user);
//null,undefined
let u: undefined = undefined;
let n: null = null;
console.log(u, n);
//never
function error(message: string): never {
  throw new Error(message); // Hàm này ném lỗi và không bao giờ kết thúc một cách bình thường.
}
// error("Something went wrong!"); // Gọi hàm này sẽ ném lỗi và chương trình kết thúc tại đây.

function infiniteLoop(): never {
  while (true) {
    console.log("This will loop forever!");
  }
}

// infiniteLoop(); // Chương trình sẽ bị kẹt trong vòng lặp vô tận và không bao giờ thoát ra.

let d = null;
console.log(typeof d); // 'object'
