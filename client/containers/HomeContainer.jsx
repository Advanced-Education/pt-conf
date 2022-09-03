import React, { Component } from 'react';
import {Box, Typography } from '@mui/material/';
import Login from '../components/Login';
import Signup from '../components/Signup';
class HomeContainer extends Component {
  constructor() {
    super();
  }
  render() {
    const { login, signup } = this.props; // ML is this not necessart with RTK?
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
        <Login show={login}/>
        <Signup show={signup}/>
      </div>
    );
  }
}

export default HomeContainer;