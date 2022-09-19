import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import logo from '../images/bank.png';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
      TheCatCoder Organization.
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      width: '100vw',
    },      
    body: {
      height: '100vh',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
export default function SignInSide() {
    const classes = useStyles();
 
    return (
        <div className={classes.paper}>
          <img src={logo} alt='logo'/>
          <Typography component="h1" variant="h4">
              Welcome to the Mad Cat Bank
          </Typography>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>
    );
}
