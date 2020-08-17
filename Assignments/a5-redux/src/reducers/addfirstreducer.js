const addFirstReducer = function AddFirstName(state = null, action) {
    console.log(action)
    switch (action.type) {
        case "ADD_FIRSTNAME":
            return action.payload
        default:
            break;
    }
    return state
}

export default addFirstReducer