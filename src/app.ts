// Code goes here!

// Intersection Types
type Admin = {
  name: string;
  priviliages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // this is

// Type Guards
type CombineAble = number | string;

function add(a: CombineAble, b: CombineAble) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  if ("priviliages" in emp) {
    console.log(emp.priviliages);
  }

  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

printEmployeeInformation({ name: "Hamdan", startDate: new Date() });

class Car {}

class Truck {}

type Vehicle = Car | Truck;

const v1: Vehicle = new Car();
const v2: Vehicle = new Truck();

console.log(v1 instanceof Car);
console.log(v2 instanceof Truck);

// Discriminted Unions
interface Bird {
  type: "bird";
  fly: number;
}

interface House {
  type: "house";
  run: number;
}

function action(animal: Bird | House) {
  if (animal.type === "bird") {
    console.log(animal.fly);
  }

  if (animal.type === "house") {
    console.log(animal.run);
  }
}

action({ type: "house", run: 10 });
action({ type: "bird", fly: 10 });

// type casting

const userInput = <HTMLInputElement>document.getElementById("my-div");

userInput.value = "Hello World";

const userInput2 = document.getElementById("my-input") as HTMLInputElement;

userInput2.value = "Hello World";

// index properties

interface ErrorContainer {
  [prop: string]: string;
}

const error: ErrorContainer = {
  email: "Email Is Invalid!",
};

// Function Overloads

function substract(a: number, b: number): number;
function substract(a: string, b: string): string;
function substract(a: number | string, b: number | string) {
  if (typeof a === "number" || typeof b === "number") {
    return +a + +b;
  }

  return `hello world ${a} ${b}`;
}

substract("a", "b");
substract(1, 2);

// optional chaining

interface VeryDangerData {
  data?: {
    field?: {
      fielde2?: {
        field3?: string;
      };
    };
  };
}

const unknownData: VeryDangerData = {};

unknownData?.data?.field?.fielde2?.field3; // will not crash

// nullish coalescing
interface UnknownData {
  data: string | undefined;
}

const unknownDataWithNullCoalescing: UnknownData = {
  data: undefined,
};

console.log(unknownDataWithNullCoalescing.data ?? "no-data");
