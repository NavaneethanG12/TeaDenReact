
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


const StepperButton = ({style, onTap}) => {

const [count, setCount] = useState(0);

  // Increment the count
const handleIncrement = () => {
  setCount(count + 1);
  onTap(count + 1)
};

  // Decrement the count (but not below 0)
const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onTap(count - 1)
    }
  };

  // Handle the Add button click
const handleAddClick = () => {
    if (count === 0) {
      setCount(1); // Optionally, start at 1 when clicked
      onTap(1)
    }
};

return (
     <View style={[styles.overlayContainer, style]}>
        {count === 0 ? (
          <TouchableOpacity onPress={handleAddClick} style={styles.addButton}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.counterContainer}>
            <TouchableOpacity onPress={handleDecrement} style={styles.counterButton}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>{count}</Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.counterButton}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
    </View>
    );
}

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
      textAlign: 'center'
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

export default StepperButton;