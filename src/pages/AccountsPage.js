import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import AccountsTable from './AccountsTable'
import bkgImage from '../images/david-dvoracek-QiPe0UpC0_U-unsplash.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
  },      
  body: {
    height: '100vh',
  },
  image: {  
    backgroundImage: 'url(' + bkgImage + ')',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const AccountsPage = () => {

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.body}>
        <Grid item xs={4} sm={4} md={4} className={classes.image} />
        <Grid item xs={40} sm={8} md={8} component={Paper} elevation={6} square>
          <AccountsTable/>
       </Grid>
      </Grid>
    </Grid>
  );
};

export default AccountsPage;

