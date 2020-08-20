const editClickedReducer = function editProductBroadcast(state = null, action) {
    console.log("Broadcast action received");
    switch (action.type) {
        case "EDIT_CLICKED":
            console.log("Action with payload received")
            console.log(action.payload);
            return action.payload
        case "DELETE_PRODUCT":
            return null
        case "ALL_PRODUCT":
            return state
        default:
            break;
    }
    return state
}

export default editClickedReducer