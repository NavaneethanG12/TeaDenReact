// ImageWithAddButton.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import ImageWithAddButton from '../button/ImageWithAddButon';

const CarouselContainer = ({categoryData}) => {

  return (
    <View style={{height:300}}>
        <Text>{categoryData.categoryName}</Text>
        <FlatList
            data={categoryData.items}
            horizontal={true} // Enable horizontal scrolling
            keyExtractor={(item) => item.productId}
            renderItem={({ item }) => (
              <ImageWithAddButton imageUri={item.imageUrl} />
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
