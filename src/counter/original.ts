export interface State {
  readonly count: number;
}

export interface CounterEvent {
  readonly kind: string;
}

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
  { kind: "Increment" },
  { kind: "Increment" },
  { kind: "Reset" },
  { kind: "SetCount", count: 5 },
  { kind: "Increment" },
];

console.log("End state =", events.reduce(counterReducer, { count: 0 }));
