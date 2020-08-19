const allProductReducer = function allProductReducer(state = null, action) {
    var products = [
        {
            "name": "Samsung",
            "category": "Mobiles",
            "price": "35999",
            "quantity": "10",
            "stock": "Yes",
            "id": 1
        },
        {
            "name": "One Plus",
            "category": "Mobiles",
            "price": "47000",
            "quantity": "10",
            "stock": "Yes",
            "id": 2
        },
        {
            "name": "HP Laptop",
            "category": "Laptops",
            "price": "89099",
            "quantity": "10",
            "stock": "Yes",
            "id": 3
        },
        {
            "name": "Dell Inspiron",
            "category": "Laptops",
            "price": "115000",
            "quantity": "10",
            "stock": "Yes",
            "id": 4
        },
        {
            "name": "ASUS Classic",
            "category": "Laptops",
            "price": "51000",
            "quantity": "10",
            "stock": "Yes",
            "id": 5
        },
        {

            "name": "Cannon EOS",
            "category": "Cameras",
            "price": "28000",
            "quantity": "10",
            "stock": "Yes",
            "id": 6
        },
        {
            "name": "Sony Camera",
            "category": "Cameras",
            "price": "30000",
            "quantity": "10",
            "stock": "Yes",
            "id": 7
        },
        {
            "name": "Nikon D750",
            "category": "Cameras",
            "price": "178550",
            "quantity": "10",
            "stock": "Yes",
            "id": 8
        },
        {
            "name": "Redmi K20 Pro",
            "category": "Mobiles",
            "price": "24999",
            "quantity": "10",
            "stock": "Yes",
            "id": 9
        }
    ]

    switch (action.type) {
        case "NEW_PRODUCT":
            let length = state.length
            let newproduct = [{
                id: length + 1,
                name: action.payload.name,
                category: action.payload.category,
                price: action.payload.price,
                quantity: action.payload.quantity,
                stock: action.payload.stock
            }, ...state]
            return newproduct
        case "PRODUCT_CLICKED":
            console.log("Action with payload received")
            console.log(action.payload);
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