let stdId: number = 1111;
let stdName: string = "lee";
let age: number = 20;
let gender: string = "male";
let course: string = "typescript";
let completed: boolean = false;

interface Student {
  stdId: number;
  stdName: string;
  age: number;
  gender: string;
  course: string;
  completed: boolean;
}

function getInfo(id: number): Student {
  return {
    stdId: id,
    stdName: "kim",
    age: 20,
    gender: "female",
    course: "js",
    completed: true,
  };
}

console.log(getInfo(5678));
