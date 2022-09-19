import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "https://keycloak-sso.apps.home.myocp.net/auth/",
 realm: "apps",
 clientId: "React-auth",
    // url: process.env.KEYCLOAK_URL,
    // realm: process.env.KEYCLOAK_REALM,
    // clientId: process.env.KEYCLOAK_CLIENTID
});

export default keycloak;



