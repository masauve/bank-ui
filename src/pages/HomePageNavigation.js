import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/bank.png';
  
const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(20, 0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  }));
  
export default function HomePageNavigation() {
    const classes = useStyles();
 
    return (
        <div className={classes.paper}>
          <img src={logo} alt='logo'/>
          <Typography component="h1" variant="h2">
              Welcome to the Mad Cat Bank
          </Typography>
        </div>
    );
}
