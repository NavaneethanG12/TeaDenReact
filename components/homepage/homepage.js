import CarouselContainer from "../carousel/Carousel"
import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import HoverButton from "../HoverButton/hoverButton";
const HomePageComponent = ({categories, goToCartTapped}) => {
    return (
        <View style = {{flex: 1}}>
            <ScrollView>
                {categories.map((category) => (
            <CarouselContainer key={category.categoryId} categoryData={category}></CarouselContainer>
          ))}
            </ScrollView> 
            <HoverButton buttonWidth={200} title={'Go To Cart'} onPress={goToCartTapped}></HoverButton>     
        </View>)
}

export default HomePageComponent;