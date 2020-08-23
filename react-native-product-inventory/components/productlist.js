import React, { useState, useEffect } from "react";
import axios from 'axios';
import { SearchBar } from 'react-native-elements';
import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native";


export default function ProductList() {

    const [products, setProducts] = useState([])
    // const [filteredproducts, setFilteredProducts] = useState([])
    // const [searchTerm, setSearchTerm] = useState("") 

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/rishit1905/CDE-REACT-TRAINING/products")
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
            }, error => {
                console.log(error);
            })
    })

    // useEffect(() => {
    //     const searchF = products.filter(f => {
    //         return f.name.toLowerCase().startsWith(searchTerm.trim().toLowerCase())
    //     })
    //     setFilteredProducts(searchF)
    // }, [searchTerm])

    // const handleChange = event => {
    //     setSearchTerm(event)
    //     // if (searchTerm !== "") {
    //     //    const newlist = products.filter(f => {
    //     //         return f.name.toLowerCase().startsWith(searchTerm.trim().toLowerCase())
    //     //     })
    //     //     setFilteredProducts(newlist)
    //     // }
    //     // else {
    //     //     setFilteredProducts(products)
    //     // }
    // }

    return (
        <View>
            <SearchBar
                placeholder="search product here..."
                // value={searchTerm}
                // onChangeText={handleChange}
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