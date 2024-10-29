//멤버변수 = 속성 = 프로퍼티
//멤버함수 = 메소드
//클래스
var Employee = /** @class */ (function () {
    //생성자의 파라미터는 암묵적으로 클래스의 맴버변수로 선언됨
    //동시에 전달 인자로도 사용됨
    function Employee(_empName, _age, _empjob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empjob = _empjob;
        this.printEmp = function () {
            console.log("".concat(_this._empName, "\uC758 \uB098\uC774\uB294 ").concat(_this._age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(_this._empjob, "\uC785\uB2C8\uB2E4."));
        };
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
