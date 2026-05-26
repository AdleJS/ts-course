// variable annotations
let num: number;
num = 5;

let str: string;
str = "hi";

let bool: boolean;
bool = false;

let missing: undefined;
let nothing: null;

// literal type
let state: "alive" | "dead";
state = "alive";
state = "dead";

// function annotation
function add(a: number, b: number): number {
  return a + b;
}

const concat = (a: string, b: string): string => {
  return a + b;
};

add(140, 30);
concat("Adlet", "Askar");

// array annotation
const digits: number[] = [1, 2, 3];
digits.push(3);

// object annotation
let user: { name: string; id: number; age?: number } = {
  name: "Adilet",
  id: 6,
};

let anotherUser = {
  name: "Altair",
  id: 2,
  age: 21,
};

// union types
let numberOrString: number | string;
numberOrString = 3;
numberOrString = "hello";

let numberOrStringsArr: (number | string)[];
numberOrStringsArr = ["1", 2, "3", 4];

// type narrowing
let elemOrNull: HTMLElement | null;
elemOrNull = document.getElementById("id");

if (elemOrNull === null) {
  console.log("not found");
} else {
  elemOrNull.addEventListener("click", () => {
    console.log("clicked");
  });
}

// type aliases
type CustomId = string | number;
let myId: CustomId;
myId = "2343";
