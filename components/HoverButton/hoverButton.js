import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,FlatList } from 'react-native';

const hoverbuttonCentre =  () => {
    const x = Dimensions.get('window').width/2
    return x - 75;
} 

const HoverButton = () => {
    return (
    <TouchableOpacity style = {[styles.hoverView, {left: hoverbuttonCentre}, {alignContent: 'center', justifyContent: 'center'}]}>
    <Text > ADD </Text>
    </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    hoverView: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'red',
        width: 150,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
      }
});

export default HoverButton;