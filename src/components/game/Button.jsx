import React from "react";
import classNames from "classnames";
// import "components/Button.scss";

export default function Button(props) {
   // let buttonClass = "button";

   // if (props.confirm) {
   //   buttonClass += " button--confirm";
   // }
 
   // if (props.danger) {
  //  //    buttonClass += " button--danger";
  //  //  }
  //  let buttonClass = classNames(
  //    'button', 
  //    {
  //    'button--confirm': props.confirm, 
  //    'button--danger': props.danger
  //   })

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#3f51b5",
    color: "white",
    border: "none",
    fontSize: "medium",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "5%",
    paddingTop: "2%",
    paddingBottom: "2%",
    textTransform: "uppercase",
  }
    
  return (
    <button
      style={buttonStyle}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}