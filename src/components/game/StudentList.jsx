import React from "react";
import StudentListItem from "./StudentListItem"

export default function StudentList(props) {
   const {names} = props;
   let count = 1 ;
  return <>{names.map((studentName) =>
    <StudentListItem
      key={count++}
      name={studentName}  />
  )}</>
}
