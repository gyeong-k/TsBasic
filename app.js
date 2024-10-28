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
        gender: "female",
        course: "js",
        completed: true,
    };
}
function setInfo(student) {
    console.log(student);
}
var std = {
    stdId: 5555,
    stdName: "lee",
    age: 30,
    gender: "male",
    course: "node.js",
    completed: true,
};
setInfo(std);
// console.log(getInfo(5678));
