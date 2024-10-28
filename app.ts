let stdId: number = 1111;
let stdName: string = "lee";
let age: number = 20;
let gender: string = "male";
let course: string = "typescript";
let completed: boolean = false;

interface Student {
  stdId: number;
  stdName: string;
  age?: number;
  gender: string;
  course: string;
  completed: boolean;
}

function getInfo(id: number): Student {
  return {
    stdId: id,
    stdName: "kim",
    gender: "female",
    course: "js",
    completed: true,
  };
}

function setInfo(student: Student): void {
  console.log(student);
}

let std = {
  stdId: 5555,
  stdName: "lee",
  age: 30,
  gender: "male",
  course: "node.js",
  completed: true,
};

setInfo(std);
// console.log(getInfo(5678));
