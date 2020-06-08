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

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {', '}
      <Link to="/home" style={linkStyle} color="inherit">
        Interactive Classroom
      </Link>
      {'.'}
    </Typography>
  );
}