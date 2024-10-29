//멤버변수 = 속성 = 프로퍼티
//멤버함수 = 메소드
//클래스
var Employee = /** @class */ (function () {
    //생성자 -> 객체 생성시 자동 생성
    //다른 언어에서 생성자는 클래스 이름과 같음
    //this = 객체 자기자신
    function Employee(empName, age, empjob) {
        var _this = this;
        this.printEmp = function () {
            console.log("".concat(_this._empName, "\uC758 \uB098\uC774\uB294 ").concat(_this._age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(_this._empjob, "\uC785\uB2C8\uB2E4."));
        };
        this._empName = empName;
        this._age = age;
        this._empjob = empjob;
    }
    Object.defineProperty(Employee.prototype, "empName", {
        //get/set => 쌍으로 만들어주는게 관례
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
//객체
//다른 언어의 생성자는 클래스 이름과 같다는 걸 기억
//그럼 아래 코드의 Employee는 생성자라고 생각해도 무관
var employee1 = new Employee("kim", 20, "개발자");
employee1.empName = "lee"; // 클래스 안 set empName 호출
employee1.printEmp();
