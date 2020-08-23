import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

export default function ProductDetail({ route, navigation }) {

    return (
        <View>
            <Card>
                <Text>Product Name: {route.params.name}</Text>
                <Text>Brand: {route.params.brand}</Text>
                <Text>Description: {route.params.description}</Text>
                <Text>Category: {route.params.category}</Text>
                <Text>Price: {route.params.price}</Text>
                <Text>Stock: {route.params.stock}</Text>
            </Card>
            {/* <Image
                    style={{ width: 200, height: 200 }}
                >{imageURL}</Image> */}

        </View>
    )
}