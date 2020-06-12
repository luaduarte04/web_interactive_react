import React, {useState} from "react";
import Button from "./Button"

export default function Form(props) {
  // const {name, interviewers, interviewer, onSave, onCancel} = props
  let [name, setName] = useState("");
    
  return (
    <>
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => {event.preventDefault(); props.onSave(name)}}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            data-testid="student-name-input"
          />
        </form>            
        <section >
            <Button onClick={() => props.onSave(name)}>Enter Room</Button>
        </section>
      </section>
    </>
  )
}
