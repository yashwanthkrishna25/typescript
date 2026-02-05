
function greetUser(name, title) {
    if (title) {
        console.log("Hello, ".concat(title, " ").concat(name, "!"));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
greetUser("Yashwanth");
var addNumbers = function (a, b) { return a + b; };

console.log("Age:", addNumbers(1, 19));
