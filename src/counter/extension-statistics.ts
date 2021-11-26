import {
  CounterEvent,
  createCounterEventReducer,
  Increment,
  Reset,
  SetCount,
} from "./unionWithHandlerObject";

type Statistics = {
  [EventKind in CounterEvent["kind"]]?: number;
};

const statsReducer = createCounterEventReducer<Statistics>({
  handleIncrement(stats) {
    return { ...stats, Increment: (stats.Increment ?? 0) + 1 };
  },
  handleReset(stats) {
    return { ...stats, Reset: (stats.Reset ?? 0) + 1 };
  },
  handleSetCount(stats) {
    return { ...stats, SetCount: (stats.SetCount ?? 0) + 1 };
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

console.log("Statistics =", events.reduce(statsReducer, {}));
