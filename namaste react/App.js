import React from "react";
import ReactDom from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading 1"
  )
  
  const heading2 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading 2"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "contianer"
    },
    [heading, heading2]
  );
  
  
  console.log(heading);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(container);