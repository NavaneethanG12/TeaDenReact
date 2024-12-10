// ImageWithAddButton.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,FlatList } from 'react-native';
import StepperButton from './StepperButton';

const ImageWithAddButton = ({ imageUri }) => {
 
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
      />
      <StepperButton style={styles.overlayContainer}></StepperButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    height:200
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1, // Ensures the button is on top of the image
    backgroundColor: 'black', // Optional background for visibility
    padding: 5,
    justifyContent: 'center',
    borderRadius: 15,
  },
  addButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  counterText: {
    color: 'white',
    fontSize: 16,
    color:'red'
  },
});

export default ImageWithAddButton;
