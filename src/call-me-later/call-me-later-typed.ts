export class Dog {
  constructor() {}

  bark(): void {
    console.log("Woof");
  }

  greet(name: string): void {
    console.log(`Woof! Hello ${name}! Woof!`);
  }
}

function callMethodLater<MethodName extends keyof Dog>(
  waitMs: number,
  object: Dog,
  methodName: MethodName,
  ...args: Parameters<Dog[MethodName]>
): void {
  setTimeout(() => {
    (object as any)[methodName].call(object, ...args);
  }, waitMs);
}

const dog = new Dog();

callMethodLater(1000, dog, "bark");
callMethodLater(2000, dog, "greet", "David");
