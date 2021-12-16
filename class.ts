class person {
  name: string;
  private _partner: string;
  readonly fatherName: string;
  constructor(name: string, father: string) {
    this.name = name;
    this._partner = name;
    this.fatherName = father;
  }
  getName(): string {
    return this.name;
  }
}

const sam = new person("Samuel", "David");
console.log("Name:", sam.name);
const samName: string = sam.getName();
sam.name = "Ben";
