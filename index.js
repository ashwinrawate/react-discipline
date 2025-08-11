const parentElement = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hi from child Element")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentElement);
