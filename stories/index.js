import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";


import Card from 'components/card/Card'

storiesOf("Card", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("hidden", () => (
    <Card 
      onClick={action("image-Clicked")}
      id={1}
      back={'/img/back.png'}
      front={'img/front.png'}
      flipped ={false}
    />
  ))
  .add("flipped", () => (
    <Card 
      onClick={action("image-Clicked")}
      id={1}
      back={'/img/back.png'}
      front={'img/front.png'}
      flipped ={true}
    />
  ))

  
