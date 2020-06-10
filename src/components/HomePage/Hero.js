import React from 'react';
import './Hero.scss';

import { Button, Typography } from '@material-ui/core';


export default function Hero(props) {
  return (
    <section>
      <div className="hero-banner">
        <div className="hero-text">
          <Typography
            style={{ fontWeight: 'bold', marginTop: "10%", marginBottom: "5%" }}
            align="center"
            variant="h2"
            marked="center">
            Engage more.
          </Typography>
          <div className="divider"></div>
          <Typography
            style={{ marginTop: "4%" }}
            align="center"
            variant="h5">
            Bring meaningful experiences to your classroom 
          </Typography>
          <Button
            color="primary"
            variant="contained"
            size="large"
            // className={styles.button}
            //component="a"
            href="/Register"
            style={{ marginTop: "10%", marginBottom: "10%" }}>
            Register
          </Button>
        </div>
      </div>
    </section>
  )
}