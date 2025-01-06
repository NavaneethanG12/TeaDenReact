// ImageWithAddButton.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import ImageWithAddButton from '../button/ImageWithAddButon';
import CartManager from '../Models/CartManager';
import {useDataContext} from'../dataProvider/dataprovider';
const cartManager = new CartManager()

const CarouselContainer = ({categoryData}) => {
  const { data,updateData } = useDataContext();
  return (
    <View style={{height:300}}>
        <Text>{categoryData.categoryName}</Text>
        <FlatList
            data={categoryData.items}
            horizontal={true} // Enable horizontal scrolling
            keyExtractor={(item) => item.productId}
            renderItem={({ item }) => (
              <ImageWithAddButton imageUri={item.imageUrl} count={item.count} onTap={(count)=>{updateData(categoryData.categoryId,item.productId,count)}} />
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


// // ImageWithAddButton.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
// import ImageWithAddButton from '../button/ImageWithAddButon';
// import CartManager from '../Models/CartManager';

// const cartManager = new CartManager()

// const CarouselContainer = ({categoryData}) => {
//   const { data,updateData } = useDataContext();

//   return (
//     <View style={{height:300}}>
//         <Text>{categoryData.categoryName}</Text>
//         <FlatList
//             data={categoryData.items}
//             horizontal={true} // Enable horizontal scrolling
//             keyExtractor={(item) => item.productId}
//             renderItem={({ item }) => (
//               <ImageWithAddButton imageUri={item.imageUrl} count={item.count} onTap={(count)=> {updateData(categoryData.categoryId,item.productId,count)}} />
//             )}
//             showsHorizontalScrollIndicator={false} // Hide scroll indicator
//             contentContainerStyle={styles.flatListContainer}
//           />
//     </View>

//   );
// };

// const styles = StyleSheet.create({
//     flatListContainer: {
//         gap:10
//     }
// });

// export default CarouselContainer;
