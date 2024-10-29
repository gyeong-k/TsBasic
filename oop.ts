//멤버변수 = 속성 = 프로퍼티
//멤버함수 = 메소드

//클래스
class Employee {
  //멤버 변수
  empName: string;
  age: number;
  empjob: string;
  printEmp = (): void => {
    console.log(
      `${this.empName}의 나이는 ${this.age}이고, 직업은 ${this.empjob}입니다.`
    );
  };
}

//객체
let employee1 = new Employee();
employee1.empName = "kim";
employee1.age = 20;
employee1.empjob = "개발자";
employee1.printEmp();
