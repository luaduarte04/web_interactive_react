import React from 'react';
import { useState } from "react"
import axios from "axios"

export default ({ url, method, body }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);
      return response.data
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops...</h4>
            <ul>{err.response.statusText}</ul>
        </div>
      );
    throw (err);
    }
  };
  return { doRequest, errors };
}