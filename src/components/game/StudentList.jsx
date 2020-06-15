import React from "react";
import StudentListItem from "./StudentListItem"

export default function StudentList(props) {
   const {students, setTurn, isTeacher} = props;
   let count = 1 ;
  return <>{students.map((student) =>
    <StudentListItem
      key={count++}
      name={student.name} 
      isTeacher={isTeacher}
      setTurn={() => setTurn(student.id)} />
  )}</>
}
