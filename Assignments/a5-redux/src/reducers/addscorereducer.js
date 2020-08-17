const addScoreReducer = (state = null, action) => {
    switch (action.type) {
        case "ADD_SCORE":
            return action.payload
        default:
            break;
    }
    return state
}

export default addScoreReducer