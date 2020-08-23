import React, { useState, useEffect } from "react";
import axios from 'axios';
import { SearchBar, Card } from 'react-native-elements';
import { ScrollView, TouchableOpacity, View, Text, Image, Button } from "react-native";


export default function ProductList({ navigation }) {

    const [products, setProducts] = useState([])
    // const [filteredproducts, setFilteredProducts] = useState([])
    // const [searchTerm, setSearchTerm] = useState("") 

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

        <View>
            {/* <SearchBar
                placeholder="search product here..."
                // value={searchTerm}
                // onChangeText={handleChange}
            /> */}
            <Button
                title="Add Product"
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
                                            style={{ width: 200, height: 200 }}
                                        />
                                        <Text>{product.name}</Text>
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