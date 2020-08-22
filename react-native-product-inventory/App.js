import React, { useState, useEffect } from "react";
import axios from 'axios';
import { StyleSheet, ScrollView, TouchableOpacity, View, Text } from "react-native";
import ProductList from "./components/productlist";


export default function App() {

  return (
    <View>
      <ProductList></ProductList>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
