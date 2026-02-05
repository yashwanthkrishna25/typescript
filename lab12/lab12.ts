
enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum Status {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
}


function printStatusOrDirection(value: Direction | Status): void {
  console.log(value);
}

let move: Direction = Direction.Left;
let currentStatus: Status = Status.SUCCESS;

printStatusOrDirection(move);
printStatusOrDirection(currentStatus);
