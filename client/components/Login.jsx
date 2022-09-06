import React from 'react';
import { Box, Button, Avatar, TextField, Grid } from '@mui/material/';
import SchoolIcon from '@mui/icons-material/School';
import Error from './Error';

const Login = (props) => {

  const { show, showError, toggleSignup, loginError } = props;

  const submitGetRequest = (e) => {
    if (!e.password || !e.confirmPassword) loginError();
    else {
      fetch('/api/parents/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          emaiL: e.email, 
          password: e.password
        }
      }).then((res) => { 
        if (res.message === 'error') loginError();
        else 'ML redirect';
      });
    }
  };

  if (show) return (
    <Box
      sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ width: 80, height: 80, m: 1.8, bgcolor: 'primary.main' }}>
        <SchoolIcon fontSize='large' />
      </Avatar>
      <Box component="form" onSubmit={submitGetRequest} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <Error
          show={showError}
          message="Incorrect email address and/or password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log In
        </Button>
        <Grid container>
          <Button variant="text" onClick={toggleSignup}>
            {'Don\'t have an account? Sign Up'}
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;