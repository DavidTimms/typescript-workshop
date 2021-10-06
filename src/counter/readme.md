# Counter

This example shows several solutions to the same problem - implementing the logic for a simple counter system. Each implementation defines several events which can happen in the system, and a reducer which calculates the new counter state given its previous state and an event.

- How easy is it to add a "decrement" event to each implementation? If you make a error, will the type system catch it?

- How easy is it to add a statistics reducer to each implementation, which counts the number of times each event has been called? If you make a error, will the type system catch it?
