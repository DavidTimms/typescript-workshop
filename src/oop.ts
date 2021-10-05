interface State {
  count: number;
}

interface CounterEvent {
  kind: string;
  updateState(state: State): State;
}

class Increment implements CounterEvent {
  readonly kind = "Increment";

  updateState(state: State) {
    return { count: state.count + 1 };
  }
}

class Reset implements CounterEvent {
  readonly kind = "Reset";

  updateState() {
    return { count: 0 };
  }
}

class SetCount implements CounterEvent {
  readonly kind = "SetCount";
  constructor(readonly count: number) {}

  updateState() {
    return { count: this.count };
  }
}

function counterReducer(state: State, event: CounterEvent): State {
  return event.updateState(state);
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

export {};
