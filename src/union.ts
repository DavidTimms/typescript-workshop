interface State {
  count: number;
}

type CounterEvent = Increment | Reset | SetCount;

class Increment {
  readonly kind = "Increment";
}

class Reset {
  readonly kind = "Reset";
}

class SetCount {
  readonly kind = "SetCount";
  constructor(readonly count: number) {}
}

function counterReducer(state: State, event: CounterEvent): State {
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

export {};
