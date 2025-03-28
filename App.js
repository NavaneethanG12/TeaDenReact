import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList,SafeAreaView, ScrollView, Dimensions } from 'react-native';
import ImageWithAddButton from './components/button/ImageWithAddButon'
import CarouselContainer from './components/carousel/Carousel';
import HoverButton from './components/HoverButton/hoverButton';
import BillItemComponent from './components/Billing/BillItemComponent';
import ChekoutPage from './components/Billing/CheckoutPage';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePageComponent from './components/homepage/homepage';
import DataProvider from'./components/dataProvider/dataprovider';
const imageData = [
  { id: '1', uri: 'https://via.placeholder.com/200' },
  { id: '2', uri: 'https://via.placeholder.com/200/FF0000' },
  { id: '3', uri: 'https://via.placeholder.com/200/00FF00' },
  { id: '4', uri: 'https://via.placeholder.com/200/0000FF' },
  { id: '5', uri: 'https://via.placeholder.com/200/FFFF00' },
  { id: '6', uri: 'https://via.placeholder.com/200/FFFF00' },
  { id: '7', uri: 'https://via.placeholder.com/200/FFFF00' },
  { id: '8', uri: 'https://via.placeholder.com/200/FFFF00' }
];
const categories = [
  {
    categoryId: '1',
    categoryName: 'Hot Beverages',
    items: [
      {
        productId: '1',
        categoryId: '1',
        productName: 'Classic Tea',
        imageUrl: 'https://via.placeholder.com/200',
        count: 10,
        price: 15
      },
      {
        productId: '2',
        categoryId: '1',
        productName: 'Elachi Tea',
        imageUrl: 'https://via.placeholder.com/200//FF0000',
        count: 10,
        price: 15
      },
      {
        productId: '3',
        categoryId: '1',
        productName: 'Ginger Tea',
        imageUrl: 'https://via.placeholder.com/200',
        count: 10,
        price: 20
      },
      {
        productId: '4',
        categoryId: '1',
        productName: 'Honey Tea',
        imageUrl: 'https://via.placeholder.com/200//FF0000',
        count: 10,
        price: 15
      }

    ]
  },
  {
    categoryId: '2',
    categoryName: 'Cold Beverages',
    items: [
      {
        productId: '5',
        categoryId: '2',
        productName: 'Cold Boost',
        imageUrl: 'https://via.placeholder.com/200',
        price: 50
      },
      {
        productId: '6',
        categoryId: '2',
        productName: 'Cold Coffee',
        imageUrl: 'https://via.placeholder.com/200//FF0000',
        price: 50
      },
      {
        productId: '7',
        categoryId: '2',
        productName: 'Cold Bourn',
        imageUrl: 'https://via.placeholder.com/200',
        price: 50
      },
      {
        productId: '8',
        categoryId: '2',
        productName: 'Cold Horlicks',
        imageUrl: 'https://via.placeholder.com/200//FF0000',
        price: 50
      }

    ]
  }
  // {
  //   categoryId: '3',
  //   categoryName: 'Snacks',
  //   items: [
  //     {
  //       productId: '9',
  //       productName: 'Puffs',
  //       imageUrl: 'https://via.placeholder.com/200',
  //       price: 50
  //     },
  //     {
  //       productId: '10',
  //       productName: 'Biscuit',
  //       imageUrl: 'https://via.placeholder.com/200//FF0000',
  //       price: 50
  //     },
  //     {
  //       productId: '11',
  //       productName: 'Samosa',
  //       imageUrl: 'https://via.placeholder.com/200',
  //       price: 50
  //     }

  //   ]
  // }
]

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (  
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <StatusBar 
                barStyle = "light-content" // Controls text color: 'dark-content', 'light-content', 'default'
                backgroundColor = 'red' // Set background color for Android
                translucent = {false} // Set to true if you want content to draw under the status bar
            />
      <HomePageComponent categories={categories} goToCartTapped={ () => navigation.navigate("Modal")}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const CheckoutPage = ({ navigation }) => {
  return (
    <ChekoutPage categories={ categories} onTap={(count) => {console.log("product is",product);product.count = count}}> </ChekoutPage>
  );
};
 

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
          name="Modal"
          component={CheckoutPage}
      />
      </Stack.Navigator>
    </NavigationContainer>
    </DataProvider>
    
    // HomeScreen(true)
  );
}



const styles = StyleSheet.create({
  flatListContainer: {
    gap:10
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f5f5f5',
  }
});


// Committed changes one