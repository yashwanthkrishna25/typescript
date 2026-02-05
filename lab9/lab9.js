function move(direction) {
    console.log("Moving", direction);
}
move("up");
function formatValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(Math.round(value));
    }
}
formatValue("Hello Yashwanth");
formatValue(12.6);
