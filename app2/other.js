import "../set-public-path";
import React from "react";

export function LazyComponent() {
  const [state, setState] = React.useState(1);
  return (
    <div>
      lazy aaa
      <button onClick={() => setState((prev) => prev + 1)}>{state}</button>
    </div>
  );
}

// export const thing = false;
