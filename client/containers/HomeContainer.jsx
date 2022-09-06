import React, { Component } from 'react';
import {Box, Typography } from '@mui/material/';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { toggleLogin, toggleSigup } from '../reducers/homepage';

class HomeContainer extends Component {
  constructor() {
    super();
  }
  render() {
    // const { login, signup } = this.props; // ML is this not necessart with RTK?

    const dispatch = useDispatch();
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
        {/* Should I pass props here or further, still dispatch to parent? */}
        <Login 
          show={ useSelector((state) => state.showLogin.value) }
          toggleSigup = { () => dispatch(toggleSigup()) }
        />
        <Signup 
          show={ useSelector((state) => state.showSignup.value) }
          toggleLogin = { () => dispatch(toggleLogin()) }
        />
      </div>
    );
  }
}

export default HomeContainer;