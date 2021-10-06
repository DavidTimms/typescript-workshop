export interface State {
  count: number;
}

export interface CounterEvent {
  kind: string;
}

export class Increment implements CounterEvent {
  readonly kind = "Increment";
}

export class Reset implements CounterEvent {
  readonly kind = "Reset";
}

export class SetCount implements CounterEvent {
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
      const setCountEvent = event as SetCount;
      return { count: setCountEvent.count };

    default:
      throw Error(`Unexpected event kind: ${event.kind}`);
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
