import React from 'react';
import './ProductPreview.scss';

import { Typography } from '@material-ui/core';

import teacher from "./teacher.jpg"
import student1 from "./student1.jpg"
import student2 from "./student2.jpg"
import student3 from "./student3.jpg"


export default function ProductPreview(props) {
  return (
    <section>
      <Typography
        style={{ fontWeight: 'bold', marginTop: "4%", marginBottom: "5%" }}
        className="title"
        variant="h4"
        marked="center"
        align="center"
        component="h2">
        Take part in a unique way of learn and play.
      </Typography>
      <div className="divider"></div>
      <div className="galery">
        <div className="img-container">
          <img src={teacher} height="auto" width="100%" alt="teacher looking at screen" />
        </div>
        <div className="img-container">
          <img src={student2} height="auto" width="100%" alt="little girl looking at screen" />
        </div>
        <div className="img-container">
          <img src={student1} height="auto" width="100%" alt="boy playing with tablet" />
        </div>
        <div className="img-container">
          <img src={student3} height="auto" width="100%" alt="little girl with headphone" />
        </div>
      </div>
    </section>
  )
}