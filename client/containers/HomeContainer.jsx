import React, { Component } from 'react';
import {Box, Typography } from '@mui/material/';
import { useSelector, useDispatch } from 'react-redux';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { toggleLogin, toggleSignup, passwordError } from '../reducers/homepage';

const HomeContainer = (props) => {
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
        show={ useSelector((state) => state.homepage.showLogin) }
        toggleSignup = { () => dispatch(toggleSignup()) }
      />
      <Signup 
        showError={ useSelector((state) => state.homepage.showError) }
        show={ useSelector((state) => state.homepage.showSignup) }
        toggleLogin={ () => dispatch(toggleLogin()) }
        passwordError={ () => dispatch(passwordError()) }
      />
    </div>
  );
};

export default HomeContainer;