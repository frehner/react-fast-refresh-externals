import React from "react";
const Other = React.lazy(() =>
  window.System.import("app2").then((mod) => {
    return { default: mod.LazyComponent };
  })
);

export default function App() {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <Other />
    </React.Suspense>
  );
}
