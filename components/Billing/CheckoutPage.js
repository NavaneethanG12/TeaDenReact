import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,FlatList,ScrollView,Platform } from 'react-native';
import BillItemComponent from './BillItemComponent';
import HoverButton from '../HoverButton/hoverButton';
import { Button } from 'react-native-web';
import { useDataContext } from '../dataProvider/dataprovider';

const ChekoutPage = ({ categories,onTap }) => {
  const { data,updateData } = useDataContext();
    return (
      <View style={styles.checkoutPageContainer}>
        {/* Scrollable Product List */}
        <View style ={styles.flatListContainer}>
        <FlatList
          data={data}
          keyExtractor={(category) => category.categoryId.toString()}
          renderItem={({ item: category }) => (
            <View>
              {/* Display Category Name */}
              {/* <Text style={styles.categoryTitle}>{category.categoryName}</Text> */}
              {/* Products in Category */}
              <FlatList
                data={category.items}
                keyExtractor={(item) => item.productId.toString()}
                renderItem={({ item }) => 
                    {
                      
                      if (item.count > 0) {
                        return <BillItemComponent product={item}></BillItemComponent>
                    }                       
                      
                    }
                    
                }
                showsVerticalScrollIndicator={false}
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
        </View>
        {/* Order Button */}
        <View style={styles.billOrderContainer}>
          <Text>Hello</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Bill your order</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    checkoutPageContainer: {
        flex: 1
    },
    flatList: {
        flex: 1
    },
    flatListContainer: {
        flex: 1,
        marginBottom: 150,
    },

    billOrderContainer: {
        gap: 10,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 150,
        width: '100%',
        padding: 10,
        bottom: 20
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