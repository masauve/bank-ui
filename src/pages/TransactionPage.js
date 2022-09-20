import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import bkgImage from '../images/david-dvoracek-QiPe0UpC0_U-unsplash.jpg';
import TransactionTable from  './TransactionsTable';

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
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const TransactionPage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid container className={classes.body}>
        <Grid item xs={4} sm={4} md={4} className={classes.image} />
        <Grid item xs={40} sm={8} md={8} component={Paper} elevation={6} square>
          <TransactionTable/>
       </Grid>
      </Grid>
    </Grid>
  );
};

export default TransactionPage;
