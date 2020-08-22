import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native";


export default function ProductList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/rishit1905/CDE-REACT-TRAINING/products")
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
            }, error => {
                console.log(error);
            })
    })

    return (
        <View>
            <ScrollView>
                {
                    products.map(product => {
                        return (
                            <View key={product.id}>
                                <TouchableOpacity>
                                    <Image source=
                                        {{uri:product.imageURL}} />
                                    <Text>{product.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}