import axios from 'axios';

function createData(name, size, price ) {
    return { name, size, price };
}
  
const emptyRows = [
createData('', '', ''),
]; 

export const getProductList = async() => {
    const url = process.env.REACT_APP_PRODUCT_SERVICE
    console.log("base url " + url);

    try {
        // Check if the service is up
        const res = await axios.get( url + "/health" );

        if ( res.status === 200 ) {
            const productList = await axios.get( url ) 
            return productList.data
        } else {
            return emptyRows
        }
    } catch (error) {
        console.log( "SERVICE IS NOT REACHEABLE" )
        return emptyRows
    }
}