import React, { Component } from 'react';
import { Box, Button, Avatar, Link, TextField, Grid } from '@mui/material/';
import SchoolIcon from '@mui/icons-material/School';

class Login extends Component {
  constructor() {
    super();
  }
  render() {

    const { show, toggleSigup } = this.props;

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
        <Box component="form" onSubmit={'function def'} noValidate sx={{ mt: 1 }}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Button variant="text" onClick={toggleSigup}>
            {'Don\'t have an account? Sign Up'}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {'Don\'t have an account? Sign Up'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default Login;