import axios from 'axios';

function createData(transactionId, debitCreditMemo, amount ) {
    return { transactionId, debitCreditMemo, amount };
}
  
const emptyRows = [
createData('', '', ''),
]; 

export const getAccount = async(token, accountId) => {
    const url = process.env.REACT_APP_ACCOUNT_SERVICE

    try {
        const accountData = await axios.get( url + accountId, {headers: { Authorization: "Bearer " + token } } ) 
        return accountData.data
    } catch (error) {
        console.error( error.reponse  )
        return emptyRows
    }
}

export const getAccountTransactions = async(token, accountId) => {
    const url = process.env.REACT_APP_ACCOUNT_SERVICE

    try {
        const transactionsData = await axios.get( url +  accountId + "/transactions", {headers: { Authorization: "Bearer " + token } } ) 
        return transactionsData.data
    } catch (error) {
        console.error( error.reponse  )
        return emptyRows
    }
}