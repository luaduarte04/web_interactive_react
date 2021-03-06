import React, { useState }from 'react';
import axios from "axios"

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const instance = axios.create({
        withCredentials: true
      })
      const response = await instance[method](url, body);

      if (onSuccess){
        onSuccess(response.data)
      }
      return response.data
    } catch (err) {
      err = JSON.stringify(err);
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops...</h4>
            <ul>{err.message}</ul>
        </div>
      );
    }
  };
  return { doRequest, errors };
}