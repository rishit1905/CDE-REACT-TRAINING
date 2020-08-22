import React, { useState, useEffect } from "react";
import axios from 'axios';
import { SearchBar } from 'react-native-elements';
import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native";


export default function ProductList() {

    const [products, setProducts] = useState([])

    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/rishit1905/CDE-REACT-TRAINING/products")
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
            }, error => {
                console.log(error);
            })
    })

    const updateSearch = query => setSearch(query)

    return (
        <View>
            <SearchBar
                placeholder="search product here..."
                onChangeText={updateSearch}
                value={search}
            />
            <ScrollView>
                {
                    products.map(product => {
                        return (
                            <View key={product.id}>
                                <TouchableOpacity>
                                    <Image
                                        source={{ uri: product.imageURL }}
                                        style={{ width: 200, height: 200 }}
                                    />
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