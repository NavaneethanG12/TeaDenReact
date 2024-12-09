import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,FlatList, Dimensions } from 'react-native';

// const buttonWidth = 150;

const hoverbuttonCentre = (buttonWidth) => {
    const x = Dimensions.get('window').width/2
    return x - (buttonWidth/2);
} 

const HoverButton = ({buttonWidth}) => {
    return (
    <TouchableOpacity style = {[styles.hoverView, {left: hoverbuttonCentre(buttonWidth)}, {alignContent: 'center', justifyContent: 'center', width: buttonWidth}]}>
    <Text > ADD </Text>
    </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    hoverView: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'red',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
      }
});

export default HoverButton;