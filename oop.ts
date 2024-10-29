//멤버변수 = 속성 = 프로퍼티
//멤버함수 = 메소드

//클래스
class Employee {
  //멤버 변수
  private _empName: string;
  private _age: number;
  private _empjob: string;

  //생성자 -> 객체 생성시 자동 생성
  //다른 언어에서 생성자는 클래스 이름과 같음
  //this = 객체 자기자신
  constructor(empName: string, age: number, empjob: string) {
    this._empName = empName;
    this._age = age;
    this._empjob = empjob;
  }

  printEmp = (): void => {
    console.log(
      `${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empjob}입니다.`
    );
  };
}

//객체
//다른 언어의 생성자는 클래스 이름과 같다는 걸 기억
//그럼 아래 코드의 Employee는 생성자라고 생각해도 무관
let employee1 = new Employee("kim", 20, "개발자");
employee1.empName = "lee"; //  변경 가능 -> 데이터가 외부에 노출돼 있음
employee1.printEmp();
