import { Button, Container, Grid, Typography } from '@mui/material';
import Input from '@mui/joy/Input';
import React, { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.css';
import { useAppDispatch } from '../../store/store';
import { registerUser } from './accountSlice';

export interface ICredentials {
  email: string;
  password: string;
}

export default function RegisterPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  });
  const dispatch = useAppDispatch();

  function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(registerUser(user));
  }

  return (
    <div className="login-body">
      <Container
        sx={{
          py: 10,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid
          className="login-container"
          container
          spacing={3}
          sx={{ margin: '0 auto', backgroundColor: 'white', pr: 10, pl: 7 }}
        >
          <Typography
            className="title"
            sx={{ m: '80px auto 0 auto', fontWeight: 600 }}
            variant="h3"
          >
            Register
          </Typography>

          <Grid item xs={12}>
            <Input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
              type="email"
              className="login-input"
            />
          </Grid>

          <Grid item xs={12}>
            <Input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
              type="password"
              className="login-input"
            />
          </Grid>

          <Grid item xs={12}>
            <Input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="username"
              type="text"
              className="login-input"
            />
          </Grid>

          <Grid item xs={12}>
            <Button onClick={handleSubmit} fullWidth className="green-btn">
              Register
            </Button>
          </Grid>

          <Grid item sx={{ my: 3 }}>
            <Link to="/login">Already have an account?</Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
