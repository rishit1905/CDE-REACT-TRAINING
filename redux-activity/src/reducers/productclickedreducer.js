const productClickedReducer = function productClickedBroadcast(state = null, action) {
    console.log("Broadcast action received");
    switch (action.type) {
        case "PRODUCT_CLICKED":
            console.log("Action with payload received")
            console.log(action.payload);
            return action.payload
        case "DELETE_PRODUCT":
            return null
        default:
            break;
    }
    return state
}

export default productClickedReducer