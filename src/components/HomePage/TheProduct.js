import React from 'react';
import './TheProduct.scss';

import { Typography, Grid } from '@material-ui/core';

export default function TheProduct(props) {
  return (
    <section>
      <div className="bg">
        <Grid className="product-text" spacing={5}>
          <Grid className="text-container" style={{marginLeft: "10%"}} item xs={12} md={4}>
            <div className="icon icon1" />
            <Typography
              className="text-container-title"
              style={{fontSize: "150%"}}
              variant="h6">
              Easy to use
            </Typography>
            <Typography className="text-container-p" variant="p">
              {'Simple and Friendly interface accessable for all ages and computer knowlegde'}
              {'. Quickly share a classroom with personalized games for your students.'}
            </Typography>
          </Grid>

          <Grid className="text-container" style={{marginLeft: "5%", marginRight: "5%" }} item xs={12} md={4}>
            <div className="icon icon2" />
            <Typography
              className="text-container-title"
              style={{fontSize: "150%"}}
              variant="h6">
              New Experiences
            </Typography>
            <Typography className="text-container-p" variant="p">
              {'Bring new experiences and playtime for your students.'}
              {'Explore new activities everyday and make classroom more dynamic.'}
            </Typography>
          </Grid>

          <Grid className="text-container" style={{marginRight: "10%"}} item xs={12} md={4}>
            <div className="icon icon3" />
            <Typography
              className="text-container-title"
              style={{fontSize: "150%"}}
              variant="h6">
              Feel closer
            </Typography>
            <Typography className="text-container-p" variant="p">
              {'Connect to your students in a new level, have fun togther,'}
              {'with a playfull interface and interactive and educational games'}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}