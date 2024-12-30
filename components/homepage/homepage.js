import CarouselContainer from "../carousel/Carousel"
import React, { useState } from 'react';
import { ScrollView, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import HoverButton from "../HoverButton/hoverButton";
const HomePageComponent = ({categories}) => {
    return (
        <View>

            <ScrollView>
                {categories.map((category) => (
            <CarouselContainer categoryData={category}></CarouselContainer>
          ))}
            </ScrollView> 
            <HoverButton buttonWidth={200} title={'Go To Cart'}></HoverButton>     
        </View>)
}

export default HomePageComponent;