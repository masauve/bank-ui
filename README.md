# UI 
This UI is use to show the integration with Keycloak as an identify provider in order to call different services.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts


### This apps uses .env to run locally, it need to be define

Define a file in a .env containing the different values
```
PORT=8080

REACT_APP_REACT_KEYCLOAK_URL=[TBD]
REACT_APP_KEYCLOAK_REALM=[TBD]
REACT_APP_KEYCLOAK_CLIENTID=[TBD]

REACT_APP_ACCOUNT_SERVICE=[TBD]
```

In the project directory, you can now run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Deploy and Run in OpenShift

To run this example inside and OpenShift cluster. We assume that you have the proper setup

#### Pre requisite
* an 4.X OpenShift install
* The proper cli on your machine
* a clone/fork of the git repo
* An instance of RH SSO / Keycloak running
* The required endpoint if you want the service to work.

#### Setup

1. Connec to openshift using cli
1. Create a project
    ```
    oc new-project bank-ui
    ``` 
1. Deploy the code
    ```
    oc new-app https://github.com/froberge/bank-ui
    ```
1. Expose the service and retrive the url
    ```
    oc get services
    oc expose svc [service_name]
    oc get route [route_name] --template='http://{{.spec.host}}'
    ```

    :fire: Currently the apps won't work. We need to add the configMap.

1. Deploy the config map. 
:warning: Make sure you have enter the proper value for the different variables.

    ```
    oc apply -f [github-project]/openshift/configMap.yaml
    ```
1. Assign the configmap as env variable
    ```
    oc set env --from=configmap/banque-ui-config deploy/bank-ui
    ```    

 :boom: Refresh page it should now work.

## Authors
[Felix Roberge](https://github.com/roberge.felix@gmail.com)