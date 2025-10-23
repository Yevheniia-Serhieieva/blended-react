type Action = { type: "increment" | "decrement" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

console.log(reducer(1, { type: "decrement" }));
console.log(reducer(2, { type: "increment" }));
