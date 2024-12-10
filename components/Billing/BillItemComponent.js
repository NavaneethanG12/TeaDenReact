import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import StepperButton from '../button/StepperButton';

const rowHeight = () => {
    const width = Dimensions.get('window').width/4
}

const BillItemComponent = () => {
    return (
        <View style = {styles.itemContainer}>

        <Image
        source={{ uri: 'https://via.placeholder.com/200' }}
        style={styles.image}/>

        <Text style = {styles.text}>  Classic Tea   </Text>

        <View style = {styles.stepperContainer}>
        <StepperButton style={styles.stepperButton} ></StepperButton>
        <Text style = {styles.price}> $10 </Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'red',
        width: '100%',
        height: rowHeight,
        padding: 10,
        gap: 10
    },
    image: {
        flex: 1,
        // width: 75,
        // height: 75
        aspectRatio: 1
    },
    text: {
        flex: 2,
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold'
    },

    stepperContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
    },

    stepperButton: {

    },

    price: {
        alignSelf: 'flex-end'
    }
});

export default BillItemComponent;