//멤버변수 = 속성 = 프로퍼티
//멤버함수 = 메소드
//클래스
var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.printEmp = function () {
            console.log("".concat(_this.empName, "\uC758 \uB098\uC774\uB294 ").concat(_this.age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(_this.empjob, "\uC785\uB2C8\uB2E4."));
        };
    }
    return Employee;
}());
//객체
var employee1 = new Employee();
employee1.empName = "kim";
employee1.age = 20;
employee1.empjob = "개발자";
employee1.printEmp();
