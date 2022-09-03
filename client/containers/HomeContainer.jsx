import React, { Component } from 'react';
import {Box, Typography } from '@mui/material/';
import Login from '../components/Login';

class HomeContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="home-container">
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
          <Typography component="h1" variant="h4">
            Welcome to Parent Teacher Conferences
          </Typography>
        </Box>
        <Login/>
      </div>
    );
  }
}

export default HomeContainer;