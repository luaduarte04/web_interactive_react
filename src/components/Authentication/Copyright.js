import React from 'react';
import { Link, Typography } from '@material-ui/core';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {', '}
      <Link color="inherit" href="#">
        Interactive Classroom
      </Link>
      {'.'}
    </Typography>
  );
}