"use strict";
Array;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.push(10);
numbers.push(11);
console.log(numbers);
const friends = ["taufiqul", "george"];
let megaName = " ";
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log("Friends largest Name:", megaName);
