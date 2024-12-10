import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList,SafeAreaView, ScrollView, Dimensions } from 'react-native';
import ImageWithAddButton from './components/button/ImageWithAddButon'
import CarouselContainer from './components/carousel/Carousel';
import HoverButton from './components/HoverButton/hoverButton';
import BillItemComponent from './components/Billing/BillItemComponent';
import ChekoutPage from './components/Billing/CheckoutPage';

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

export default function App() {
  return (

    <SafeAreaView style={styles.container}>

      {/* <ScrollView>
      <CarouselContainer imageData={imageData}/>
      <CarouselContainer imageData={imageData}/>
      <CarouselContainer imageData={imageData}/>
      <CarouselContainer imageData={imageData}/>
      <CarouselContainer imageData={imageData}/>
      </ScrollView>
    
    <HoverButton buttonWidth={200}></HoverButton> */}

    {/* <ScrollView style = {[{width: '100%'}]}>
      <BillItemComponent></BillItemComponent>
      <BillItemComponent></BillItemComponent>
      <BillItemComponent></BillItemComponent>
      <BillItemComponent></BillItemComponent>
      <BillItemComponent></BillItemComponent>
      <BillItemComponent></BillItemComponent>
      <BillItemComponent></BillItemComponent>
      <BillItemComponent></BillItemComponent>
      <BillItemComponent></BillItemComponent>
      <BillItemComponent></BillItemComponent>
      <BillItemComponent></BillItemComponent>
      <BillItemComponent></BillItemComponent>
    </ScrollView> */}

      <ChekoutPage billItems={imageData}></ChekoutPage>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  flatListContainer: {
    gap:10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  }
});
