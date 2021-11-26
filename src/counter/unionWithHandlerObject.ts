/**
 * This example uses a mapped type to define a handler object,
 * allowing each case to be handled by a method. This is similar
 * to the visitor pattern.
 */

export interface State {
  count: number;
}

export type CounterEvent = Increment | Reset | SetCount;

export interface Increment {
  readonly kind: "Increment";
}

export interface Reset {
  readonly kind: "Reset";
}

export interface SetCount {
  readonly kind: "SetCount";
  readonly count: number;
}

type CounterEventHandlers<S> = {
  [Event in CounterEvent as `handle${Event["kind"]}`]: (
    state: S,
    event: Event
  ) => S;
};

export function createCounterEventReducer<S>(
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

export const counterReducer = createCounterEventReducer<State>({
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

const events: CounterEvent[] = [
  { kind: "Increment" },
  { kind: "Increment" },
  { kind: "Reset" },
  { kind: "SetCount", count: 5 },
  { kind: "Increment" },
];

console.log("End state =", events.reduce(counterReducer, { count: 0 }));
