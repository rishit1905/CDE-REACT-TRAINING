import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

export default function ProductDetail({ route }) {

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
            </Card>


        </View>
    )
}