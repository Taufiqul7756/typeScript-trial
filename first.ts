let age: number = 50;
let club: string = "RM";
const isFamous: boolean = false;
let famous: boolean;

function add(num1: any, num2: number | string) {
  return num1 + num2;
}

add(1, 2);
add("3", "adam");

function fullName(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}

const user: string = fullName("Taufiqul", "Islam");
console.log(user);
