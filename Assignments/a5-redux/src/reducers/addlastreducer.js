const addLastReducer = (state = null, action) => {
    switch (action.type) {
        case "ADD_LASTNAME":
            return action.payload
        default:
            break;
    }
    return state
}

export default addLastReducer