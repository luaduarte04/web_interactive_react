import React from 'react';
import './TheProduct.scss';

import { Container, Typography, Grid, Icon } from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

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
              {'From the latest trendy boutique hotel to the iconic palace with XXL pool'}
              {', go for a mini-vacation just a few subway stops away from your home.'}
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
              {'From the latest trendy boutique hotel to the iconic palace with XXL pool'}
              {', go for a mini-vacation just a few subway stops away from your home.'}
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
              {'From the latest trendy boutique hotel to the iconic palace with XXL pool'}
              {', go for a mini-vacation just a few subway stops away from your home.'}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}