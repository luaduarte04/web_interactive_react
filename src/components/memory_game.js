import React from "react";
import classNames from "classnames";
import "components/Button.scss";

export default function Memory(props) {
 
    return (
      <button
        className={buttonClass}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
}