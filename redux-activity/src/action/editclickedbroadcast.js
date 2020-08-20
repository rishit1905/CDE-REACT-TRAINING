const editClickedBroadcast=function(product){
    console.log("Received product for edit");
    console.log(product);
    console.log("Reducer will capture the event and payload..")
    return({
        type:"EDIT_CLICKED",
        payload:product
    })
}

export default editClickedBroadcast