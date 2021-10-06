export class Dog {
  constructor() {}

  bark(): void {
    console.log("Woof");
  }

  greet(name: string): void {
    console.log(`Woof! Hello ${name}! Woof!`);
  }
}

function callMethodLater(
  waitMs: number,
  object: Dog,
  methodName: string,
  ...args: any[]
): void {
  setTimeout(() => {
    (object as any)[methodName].call(object, ...args);
  }, waitMs);
}

const dog = new Dog();

callMethodLater(1000, dog, "bark", 23434, 343);
callMethodLater(2000, dog, "squark", "David");
