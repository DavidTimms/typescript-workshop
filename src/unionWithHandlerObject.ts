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

type CounterEventHandlers<S> = {
  [Event in CounterEvent as `handle${Event["kind"]}`]: (
    state: S,
    event: Event
  ) => S;
};

function createCounterEventReducer<S>(
  handlers: CounterEventHandlers<S>
): (state: S, event: CounterEvent) => S {
  return (state, event) => {
    const handler = handlers[`handle${event.kind}`] as (
      state: S,
      e: CounterEvent
    ) => S;
    return handler(state, event);
  };
}

const counterReducer = createCounterEventReducer<State>({
  handleIncrement(state) {
    return { count: state.count + 1 };
  },
  handleReset() {
    return { count: 0 };
  },
  handleSetCount(state, event) {
    return { count: event.count };
  },
});

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
