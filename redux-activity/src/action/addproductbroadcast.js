const addProductBroadcast=function(product){
    console.log("Received new product");
    console.log(product);
    console.log("Reducer will capture the event and payload..")
    return({
        type:"ALL_PRODUCT",
        payload:product
    })
}

export default addProductBroadcast