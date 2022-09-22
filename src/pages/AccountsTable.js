import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import logo from '../images/bank.png';
import { useKeycloak } from '@react-keycloak/web';
import { getAccounts } from '../api/AccountApi';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  img: {
    //    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();
  const [accounts, setTransactions] = useState([]);
  useEffect(() => { fetchData()}, [])
  
  const { keycloak } = useKeycloak();

  const fetchData = async () => {
    const res = await getAccounts(keycloak.token);
    console.log(res);
    setTransactions(res);
  }

  return (
    <div className={classes.paper}>
          <Typography gutterBottom component="h1" variant="h4">
              Comptes Bancaire
          </Typography>
    <div className={classes.root}>
      <Paper className={classes.paper}>
      {accounts.map((row, index) => (
        <Grid key={index} container spacing={2} style={{borderBottom:'2px solid grey' }}>
          <Grid item className={classes.img} >
            <img alt="complex" className={classes.img} src={logo}/>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h6">
                  {row.account_description} en {row.currencycode}$
                </Typography>
                <Typography variant="caption" color="textSecondary" component={Link} to={"/secured/account/"+row.accountid}>
                  {row.accountid} - {row.nickname}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h6">$ {row.currentbalance}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
      </Paper>
    </div>
    </div>
  );
}
