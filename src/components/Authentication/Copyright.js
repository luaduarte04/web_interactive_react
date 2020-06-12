import React from 'react';
import { Typography } from '@material-ui/core';

import {
  Link
} from "react-router-dom";

export default function Copyright() {
  const linkStyle = {
    color: "grey",
    textDecoration: "none"
  }

  const divider = {
    height: "1px",
    width: "100px",
    backgroundColor: "grey",
    marginBottom: "3%",
    marginTop: "5%",
  }

  const section = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  }

  return (
    <section style={section}>
      <div style={divider}></div>
      <Typography
        style={{marginBottom: "5%"}}
        variant="body2"
        color="textSecondary"
        align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        {', '}
        <Link to="/home" style={linkStyle} color="inherit">
          Interactive Classroom
        </Link>
        {'.'}
      </Typography>
    </section>
  );
}