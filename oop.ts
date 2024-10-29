//멤버변수 = 속성 = 프로퍼티
//멤버함수 = 메소드

//클래스
class Employee {
  //생성자의 파라미터는 암묵적으로 클래스의 맴버변수로 선언됨
  //동시에 전달 인자로도 사용됨
  constructor(
    private _empName: string,
    private _age: number,
    private _empjob: string
  ) {}

  //get/set => 쌍으로 만들어주는게 관례
  get empName() {
    return this._empName;
  }

  set empName(val: string) {
    this._empName = val;
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
employee1.empName = "lee"; // 클래스 안 set empName 호출
employee1.printEmp();
