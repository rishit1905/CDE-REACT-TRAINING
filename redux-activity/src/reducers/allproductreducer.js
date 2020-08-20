const allProductReducer = function allProductReducer(state = null, action) {
    var products = []

    switch (action.type) {
        case "ALL_PRODUCT":
            console.log("All products loaded !")
            console.log(action.payload)
            return action.payload
        case "NEW_PRODUCT":
            console.log("Product added successfully !");
            console.log(action.payload)
            return state
        case "PRODUCT_CLICKED":
            return state
        case "DELETE_PRODUCT":
            let productId=action.payload.id
            console.log("Product deleted successfully !");
            return state.filter(p=>p.id!==productId)
        default:
            break
    }

    return products
}

export default allProductReducer