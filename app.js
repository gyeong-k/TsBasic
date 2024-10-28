var stdId = 1111;
var stdName = "lee";
var age = 20;
var gender = "male";
var course = "typescript";
var completed = false;
function getInfo(id) {
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
