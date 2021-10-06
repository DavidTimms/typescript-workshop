/**
 * This example presents a object-oriented approach to the problem. The
 * logic for updating the state is encapsulated within the event itself.
 *
 * The logic relating to each event is localised, and it is easy to add
 * new events.
 */

export interface State {
  count: number;
}

export interface CounterEvent {
  kind: string;
  updateState(state: State): State;
}

export class Increment implements CounterEvent {
  readonly kind = "Increment";

  updateState(state: State) {
    return { count: state.count + 1 };
  }
}

export class Reset implements CounterEvent {
  readonly kind = "Reset";

  updateState() {
    return { count: 0 };
  }
}

export class SetCount implements CounterEvent {
  readonly kind = "SetCount";
  constructor(readonly count: number) {}

  updateState() {
    return { count: this.count };
  }
}

export function counterReducer(state: State, event: CounterEvent): State {
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
