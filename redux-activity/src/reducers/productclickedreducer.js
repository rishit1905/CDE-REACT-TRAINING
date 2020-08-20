const productClickedReducer = function productClickedBroadcast(state = null, action) {
    console.log("Broadcast action received");
    switch (action.type) {
        case "PRODUCT_CLICKED":
            console.log("Action with payload received")
            console.log(action.payload);
            return action.payload
        // case "ALL_PRODUCT":
        //     return state
        // case "NEW_PRODUCT":
        //     return state
        default:
            break;
    }
    return state
}

export default productClickedReducer