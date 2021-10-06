/**
 * This example presents a approach using a union type. It is very close
 * to the original implementation.
 *
 * The logic relating to each operation is localised, and it is easy to
 * add new events.
 */

export interface State {
  count: number;
}

export type CounterEvent = Increment | Reset | SetCount;

export class Increment {
  readonly kind = "Increment";
}

export class Reset {
  readonly kind = "Reset";
}

export class SetCount {
  readonly kind = "SetCount";
  constructor(readonly count: number) {}
}

export function counterReducer(state: State, event: CounterEvent): State {
  switch (event.kind) {
    case "Increment":
      return { count: state.count + 1 };

    case "Reset":
      return { count: 0 };

    case "SetCount":
      return { count: event.count };
  }
}

// --- EXAMPLE USAGE ---

const events = [
  new Increment(),
  new Increment(),
  new Reset(),
  new SetCount(5),
  new Increment(),
];

console.log("End state =", events.reduce(counterReducer, { count: 0 }));
