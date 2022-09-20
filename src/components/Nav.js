import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import '../helpers/app.css'


const useStyles = makeStyles((theme) => ({
    root: {
      height: '8vh',
      width: '100vw',
      algin: 'center'
    },      
    body: {
      height: '100vh',
    },
    div: {
        margin: theme.spacing(3, 8),
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
    }
  }));

  const Nav = () => {
 const { keycloak } = useKeycloak();
 const classes = useStyles();

    return (
        <Grid container className={classes.root}>
          <CssBaseline/>
          <Grid container className={classes.body}>
            <Grid item xs={false} sm={4} md={6}>
            <ul>
                <li>
                  <a className="hover:text-blue-800" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-800" href="/secured/account">
                    Account
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={false} sm={4} md={6}>
                <div className={classes.div}>
                {!keycloak.authenticated && (
                    <button
                    type="button"
                    className="button-login"
                    onClick={() => keycloak.login()}
                    >
                    Login
                    </button>
                )}

                {!!keycloak.authenticated && (
                    <button
                    type="button"
                    className="button-logout"
                    onClick={() => keycloak.logout()}
                    >
                    Logout ({keycloak.tokenParsed.preferred_username})
                    </button>
                )}
                </div>
            </Grid>
          </Grid>
        </Grid>
      );
    };


export default Nav;