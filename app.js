var stdId = 1111;
var stdName = "lee";
var age = 20;
var gender = "male";
var course = "typescript";
var completed = false;
//열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
    GenderType[GenderType["GenderNeutral"] = 2] = "GenderNeutral";
})(GenderType || (GenderType = {}));
//인터페이스는 구현의 개념
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 777;
        this.stdName = "lee";
        this.age = 30;
        this.gender = "male";
        this.course = "node.js";
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("이름 설정 : " + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName("앨리스");
// function getInfo(id: number): Student {
//   return {
//     stdId: id,
//     stdName: "kim",
//     gender: "female",
//     course: "js",
//     completed: true,
//   };
// }
function setInfo(student) {
    console.log(student);
}
var std = {
    stdId: 5555,
    stdName: "lee",
    age: 30,
    gender: "female",
    course: "node.js",
    completed: true,
};
//setInfo(std);
// console.log(getInfo(5678));
var user = {
    name: "john",
    age: 25,
};
var numStr = "100";
var item;
function convertTostring(val) {
    // item = val;  -> 오류
    //typeof operator
    if (typeof val === "string") {
        item = 0;
    }
    else {
        item = val;
    }
    return String(val); //  값을 string으로 변환
}
function convertToNumber(val) {
    return Number(100); //  값을 number로 변환
}
// console.log(convertTostring(numStr));
// console.log(convertToNumber(numStr));
// let numbers: number[] = [1, 2, 3, 4, 5];
// let fruits: string[] = ["apple", "banana", "orange"];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// let mixedArray: (number | string)[] = [1, "two", 3, "four"];
// for (let i = 0; i < mixedArray.length; i++) {
//   console.log(mixedArray[i]);
// }
//튜플 : 타입의 순서가 정해져 있다.
var greeting = [1, "hello", true];
for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
