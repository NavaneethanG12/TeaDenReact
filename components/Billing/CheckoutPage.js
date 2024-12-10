import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,FlatList } from 'react-native';
import BillItemComponent from './BillItemComponent';
import HoverButton from '../HoverButton/hoverButton';
import { Button } from 'react-native-web';

const ChekoutPage = ({billItems}) => {
    return(
       <View>
        <FlatList
            data={billItems}
            horizontal={false} // Enable horizontal scrolling
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <BillItemComponent></BillItemComponent>
            )}
            showsHorizontalScrollIndicator={false} // Hide scroll indicator
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
            <View style = {styles.billOrderContainer}>
            <Text> Hello </Text>

            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.text}> Bill your order</Text>
            </TouchableOpacity>
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        gap:10,
        // marginBottom: 100,
    },

    billOrderContainer: {
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 150,
        padding: 10
    },

    text: {
        fontWeight: 'bold'
    },
    
    button: {
        backgroundColor: 'red',
        borderRadius: 11,
        padding: 15
    }
});

export default ChekoutPage;