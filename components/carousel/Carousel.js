// ImageWithAddButton.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,FlatList } from 'react-native';
import ImageWithAddButton from '../button/ImageWithAddButon';

const CarouselContainer = ({imageData}) => {

  return (
    <View style={{height:300}}>
        <Text>HOT BEVERAGES</Text>
        <FlatList
            data={imageData}
            horizontal={true} // Enable horizontal scrolling
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ImageWithAddButton imageUri={item.uri} />
            )}
            showsHorizontalScrollIndicator={false} // Hide scroll indicator
            contentContainerStyle={styles.flatListContainer}
          />
    </View>

  );
};

const styles = StyleSheet.create({
    flatListContainer: {
        gap:10
    }
});

export default CarouselContainer;
