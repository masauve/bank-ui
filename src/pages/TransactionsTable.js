import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import depositLogo from '../images/bank-deposit-icon.png';
import creditLogo from '../images/creditCard.png';
import { useParams } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import { getAccountTransactions } from '../api/AccountApi';
import moment from 'moment';

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
  const [transactions, setTransactions] = useState([]);
  useEffect(() => { fetchData()}, [])
  
  let { accountid } = useParams();

  const { keycloak } = useKeycloak();

  const fetchData = async () => {
    const res = await getAccountTransactions(keycloak.token, accountid);
    console.log(res);
    setTransactions(res);
  }

  return (
    <div className={classes.paper}>
          <Typography gutterBottom component="h1" variant="h4">
              Comptes - {accountid}
          </Typography>
    <div className={classes.root}>
      <Paper className={classes.paper}>
      {transactions.map((row, index) => (
        <Grid key={index} container spacing={2} style={{borderBottom:'2px solid grey' }}>
          <Grid item className={classes.img} >
            <img alt="complex" className={classes.img} src={ row.debitcreditmemo === 'DEPOSIT' ? depositLogo : creditLogo }/>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography variant="subtitle2" color="textSecondary">
                  {moment(row.postedtimestamp).format('MMMM Do YYYY')}
                </Typography>
                <Typography variant="h6">
                  {row.transactiondescription}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {row.transactioncategory}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  ID: {row.transactionid}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h6">$ {row.amount}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
      </Paper>
    </div>
    </div>
  );
}
