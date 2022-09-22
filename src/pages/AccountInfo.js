import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import depositLogo from '../images/bank-deposit-icon.png';
import creditLogo from '../images/creditCard.png';
import { Link, useParams } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import { getAccount } from '../api/AccountApi';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();
  const [accounts, setAccounts] = useState([]);
  useEffect(() => { fetchData()}, [])

  const { keycloak } = useKeycloak();
  let { accountid } = useParams();

  const fetchData = async () => {
    const res = await getAccount(keycloak.token, accountid );
    console.log(res);
    setAccounts(res);
  }

  return (
    <div className={classes.paper}>
          <Typography gutterBottom component="h1" variant="h4">
          Comptes - {accountid}
          </Typography>
    <div className={classes.root}>
      <Paper className={classes.paper}>
      {accounts.map((row, index) => (
        <Grid key={index} container spacing={2} >
          <Grid item className={classes.img} >
            <img alt="complex" className={classes.img} src={ row.debitcreditmemo === 'DEPOSIT' ? depositLogo : creditLogo }/>
          </Grid>
          <Grid item xs={10} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography variant="h6" >
                  {row.account_description} en {row.currencycode}
              </Typography>
              <Typography variant="subtitle1" component={Link} to={"/secured/account/"+row.accountid+"/transactions"}>
                  {row.nickname}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                  {row.displayname}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                  Statut: {row.account_status}
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
