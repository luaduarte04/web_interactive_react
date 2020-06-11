import React, { useEffect } from 'react';
import authTeacher from "../../hooks/authTeacher";
import { useHistory } from "react-router-dom";

export default (){
  let history = useHistory();
  const { doRequest } = authTeacher({
    url: 'http://localhost:8080/logout/',
    method: 'post',
    body: {}, 
    onSuccess: () => history.push("/home")
  })

  useEffect(() => {
    doRequest();
    props.setUser(false);
  }, []);

 return <div>Signing you out...</div>;
}
