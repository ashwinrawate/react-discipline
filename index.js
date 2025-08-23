import React from "react";
import { createRoot } from "react-dom/client";
//react component
const TitleComponent = () => (
  <div>
    <h1>Namaste Ashwin</h1>
  </div>
);

const HeadingComponent = () => (
  <>
    <TitleComponent />
    <div>Hi</div>
  </>
);

const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
