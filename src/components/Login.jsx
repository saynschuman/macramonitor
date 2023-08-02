import React from 'react';
import img1 from '../assets/login-bg.svg';
import { Button, Grid, TextInput, Title, createStyles } from '@mantine/core';

const useStyle = createStyles((theme) => ({
  input: {
    input: {
      height: 50,
    },
  },
  button: {
    minHeight: 50,
    marginTop: 10,
  },
  title: {
    color: theme.colors.blue[7],
  },
  form: {
    flexDirection: 'column',
    gap: 20,
    width: '50%',
    padding: 50,
    '@media (max-width: 900px)': {
      padding: 30,
      width: '100%',
      maxWidth: 500,
    },
  },
  image: {
    width: '50%',
    maxWidth: '812px',
    '@media (max-width: 900px)': {
      width: '90%',
      maxWidth: 500,
    },
  },
  container: {
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  },
}));

const Login = () => {
  const { classes } = useStyle();
  return (
    <Grid
      container
      spacing={0}
      className={classes.container}
      sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}
    >
      <img src={img1} alt="bg" className={classes.image} />
      <Grid className={classes.form}>
        <Title order={2} className={classes.title}>
          Welcome to Macramonitor
        </Title>
        <TextInput
          placeholder="Your login"
          label="Login"
          withAsterisk
          type="email"
          className={classes.input}
        />
        <TextInput
          placeholder="Your password"
          label="Password"
          withAsterisk
          type="password"
          className={classes.input}
        />
        <Button className={classes.button} fullWidth>
          Sign In
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
