import axios from 'axios';

function createData(accountid, accounttype, account_description, nickname, currentcycode, currentbalance ) {
    return { accountid, accounttype, account_description, nickname, currentcycode, currentbalance };
}
  
const emptyRows = [
createData('', '', ''),
]; 

export const getAccounts = async(token, ) => {
    const url = process.env.REACT_APP_ACCOUNT_SERVICE

    try {
        const accountData = await axios.get( url, {headers: { Authorization: "Bearer " + token } } ) 
        return accountData.data
    } catch (error) {
        console.error( error.reponse  )
        return emptyRows
    }
}


export const getAccount = async(token, accountId) => {
    const url = process.env.REACT_APP_ACCOUNT_SERVICE + "/" + accountId

    try {
        const accountData = await axios.get( url, {headers: { Authorization: "Bearer " + token } } ) 
        return accountData.data
    } catch (error) {
        console.error( error.reponse  )
        return emptyRows
    }
}

export const getAccountTransactions = async(token, accountId) => {
    const url = process.env.REACT_APP_ACCOUNT_SERVICE + "/" + accountId + "/transactions"

    try {
        const transactionsData = await axios.get( url, {headers: { Authorization: "Bearer " + token } } ) 
        return transactionsData.data
    } catch (error) {
        console.error( error.reponse  )
        return emptyRows
    }
}