import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Button } from 'react-native';
import { Card } from 'react-native-elements';
import axios from "axios";

export default function ProductDetail({ route, navigation }) {

    const { item } = route.params

    const [imageURL, setImageURL] = useState("")
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Mobiles")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)

    useEffect(() => {
        setImageURL(item.imageURL)
        setName(item.name)
        setBrand(item.brand)
        setDescription(item.description)
        setCategory(item.category)
        setPrice(item.price)
        setStock(item.stock)
    })

    const deleteProduct = () => {
        console.log("Delete product with received id: " + item.id)
        axios.delete("http://localhost:3000/products/" + item.id)
            .then(response => {
                console.log(response.data);
                navigation.push("Home")
            }, error => { console.log(error);})
    }

    return (
        <View>
            <Card>
                <Image
                    source={{ uri: imageURL }}
                    style={{ width: 200, height: 200 }}
                />
                <Text>Product Name: {name}</Text>
                <Text>Brand: {brand}</Text>
                <Text>Description: {description}</Text>
                <Text>Category: {category}</Text>
                <Text>Price: {price}</Text>
                <Text>Stock: {stock}</Text>
                <Button
                    title="Update"
                    onPress={()=>navigation.navigate("Update Product",{item:item})}
                ></Button>
                <Button
                    title="Delete"
                    onPress={deleteProduct}
                ></Button>
            </Card>



        </View>
    )
}