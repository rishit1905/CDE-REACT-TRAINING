import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card } from 'react-native-elements';
import { globalstyles } from '../globalstyles/globalstyles';
import { ScrollView, TouchableOpacity, View, Text, Image, Button } from "react-native";


export default function ProductList({ navigation }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
            }, error => {
                console.log(error);
            })
    }, [])

    return (

        <View style={globalstyles.view}>
            <Button
                title="Add Product"
                style={globalstyles.button}
                onPress={() => navigation.navigate("Add Product", { item: products })}
            ></Button>

            <ScrollView>
                {
                    products.map(product => {
                        return (

                            <View key={product.id}>
                                <Card>
                                    <TouchableOpacity onPress={() => navigation.navigate("Product Detail", { item: product })}>
                                        <Image
                                            source={{ uri: product.imageURL }}
                                            style={globalstyles.images}
                                        />
                                        <Text style={globalstyles.text}>{product.name}</Text>
                                    </TouchableOpacity>
                                </Card>
                            </View>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}