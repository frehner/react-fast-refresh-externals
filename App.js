import React from "react";

export default function App() {
  const [state, setState] = React.useState(1);
  return (
    <div>
      hello
      <button onClick={() => setState((prev) => prev + 1)}>{state}</button>
    </div>
  );
}
