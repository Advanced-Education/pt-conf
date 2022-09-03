import React, { Component } from 'react';
import { Box, Button, Avatar, Link, TextField, Grid } from '@mui/material/';
import SchoolIcon from '@mui/icons-material/School';

class Signup extends Component {
  constructor() {
    super();
  }
  render() {
    return (
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
            id="studentId"
            label="Student ID"
            name="student-id"
          />
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm-password"
            label="Confirm Password"
            type="password"
            id="confirm-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Account
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {'Already have an account? Log In'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default Signup;