let stdId: number = 1111;
let stdName: string = "lee";
let age: number = 20;
let gender: string = "male";
let course: string = "typescript";
let completed: boolean = false;

//열거형 : 사용자 정의 타입
enum GenderType {
  Male,
  Female,
  GenderNeutral,
}

interface Student {
  stdId: number;
  stdName?: string;
  age?: number;
  gender?: "male" | "female";
  course?: string;
  completed?: boolean;
  setName: (name: string) => void;
  getName?: () => string;
}

//인터페이스는 구현의 개념
class MyStudent implements Student {
  stdId = 777;
  stdName = "lee";
  age = 30;
  gender: "male" | "female" = "male";
  course = "node.js";
  completed = true;
  setName(name: string): void {
    this.stdName = name;
    console.log("이름 설정 : " + this.stdName);
  }
}
const myInstance = new MyStudent();
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

function setInfo(student: Student): void {
  console.log(student);
}

let std = {
  stdId: 5555,
  stdName: "lee",
  age: 30,
  gender: "female",
  course: "node.js",
  completed: true,
};

//setInfo(std);
// console.log(getInfo(5678));

const user: { name: string; age: number } = {
  name: "john",
  age: 25,
};

type strOrNum = number | string;

let numStr: strOrNum = 100;

function convertTostring(val: strOrNum): string {
  return String(val); //  값을 string으로 변환
}

function convertToNumber(val: strOrNum): number {
  return Number(100); //  값을 number로 변환
}

console.log(convertTostring(numStr));
console.log(convertToNumber(numStr));
