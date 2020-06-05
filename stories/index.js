import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

// import "index.scss";


storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <h1>Base</h1>)

  
