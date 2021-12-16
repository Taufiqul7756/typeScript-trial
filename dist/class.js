"use strict";
class person {
  constructor(name, father) {
    this.name = name;
    this._partner = name;
    this.fatherName = father;
  }
  getName() {
    return this.name;
  }
}
const sam = new person("Samuel", "David");
console.log("Name:", sam.name);
const samName = sam.getName();
sam.name = "Ben";
