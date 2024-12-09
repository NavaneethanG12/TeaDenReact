import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Platform, Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function App() {

  const [itemsCount, setItemCount] = useState(0);
  const [showAdd, changeShowAdd] = useState(true);

  const increment = () => {
    setItemCount((previousValue) => previousValue + 1);
  };

  const decrement = () => {
    setItemCount( (previousValue) => {
      if (previousValue == 0 ) {
        return 0;
      } else {
        if ((previousValue - 1 === 0)) {
          changeShowAdd(true);
        }
        return previousValue - 1
      }
    });
  };

  const onAddButtonTapped = () => {
    changeShowAdd(false);
  };

  const AddButton = () => {
    if (showAdd) {
      return (<TouchableOpacity style = {{justifyContent: 'center', alignContent: 'center'}} onPress={ () => {
          setItemCount(1);
         changeShowAdd(false);
        } 
         }>
      <Text style = {styles.text}> Add </Text>
    </TouchableOpacity>)
    } else {
      return (
      <View style = {styles.horizontralAdd}>
        <TouchableOpacity onPress={decrement}>
        <Text style = {styles.text}> - </Text>
      </TouchableOpacity>

      <Text style = {styles.text}> {itemsCount} </Text> 

      <TouchableOpacity onPress={increment} >
      <Text style = {styles.text}> + </Text>
      </TouchableOpacity>
      </View>
      )
    }
  };

  return (
    <View style = {styles.container}>
      <View>
      <Image style = {{width: 100, height: 100}} source={require('./assets/favicon.png')}/>

      <View style = {styles.horizontralAdd}>
          { AddButton()}
      </View>
      </View>

      
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      text: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      },

      horizontralAdd: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.85)',
        borderBlockColor: 'rgba(255,0,0,0.85)',
        width: 70,
        height: 30,
        borderRadius: 10,
        borderWidth: 1
      }

}
);

// export default function App() {

//   const [text, setText] = useState("");

//   const {wwidth} = Dimensions.get('window');
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const [chosenDate, setChosenDate] = useState(new Date());


//   const handleConfirm = () => {
//     alert(`You entered: ${inputValue}`);
//     setModalVisible(false);
//   };

//   const changeText = () => {
//     setText("Updated Text");
//   };


//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your!</Text>

//       <TextInput style = {styles.text}
//       value= {text}
//       onChange={setText}
//       placeholder="Enter Text"/>

//       <Button style = {styles.button}
//       title="Normal Buton"
//       color="red"
//       onPress={changeText} />

//       <TouchableOpacity style= {[styles.button]} onPress={ () => setModalVisible(true)}>
//       <Text style= {styles.buttonText}>
//       Using Touch Opacity
//       </Text>
//       </TouchableOpacity>

//       <View style = { {width: 100, height: 100, backgroundColor: 'red'}}>
//       <RNDateTimePicker style = {styles.datePicker} mode= "date" value={new Date()} display= {Platform.OS === 'ios' ? 'spinner' : 'calender'} themeVariant='light'></RNDateTimePicker>
//       </View>

//       {/* Custom Modal for UIAlert */}
//       <Modal
//         transparent
//         animationType="fade"
//         visible={isModalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.alertBox}>
//             <Text style={styles.alertTitle}>Enter Your Text</Text>
//             <TextInput
//               style={styles.textInput}
//               placeholder="Type something..."
//               value={inputValue}
//               onChangeText={(text) => setInputValue(text)}
//             />
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 style={styles.cancelButton}
//                 onPress={() => setModalVisible(false)}
//               >
//                 <Text style={styles.cancelText}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
//                 <Text style={styles.confirmText}>OK</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   text: {
//     backgroundColor: 'yellow',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },

//   buttonText: {
//     color: 'red',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     verticalAlign: 'middle'
//   },

//   button: {
//     backgroundColor: 'black',
//     color: 'red',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     borderRadius: 15,
//     height: 50,
//     width: '50%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignItems: 'centre'
//     },
    
//     modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   alertBox: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//     elevation: 5,
//   },
//   alertTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   textInput: {
//     width: '100%',
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   cancelButton: {
//     flex: 1,
//     marginRight: 5,
//     backgroundColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   confirmButton: {
//     flex: 1,
//     marginLeft: 5,
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   cancelText: {
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   confirmText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },

//   datePicker: {
//     marginTop: 40,
//     width: '50%',
//     height: 150
//   }
// });
