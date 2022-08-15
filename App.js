// /* eslint-disable jsx-quotes */
// /* eslint-disable no-unused-vars */
// /* eslint-disable prettier/prettier */
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  
import React from 'react';
// //import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Router from './src/navigation/Router';

// import React from 'react';
// import {Text, View } from 'react-native';
// import styles from './styles.js';


// const xx =(props) => {
//     return (
//         <View>
//             <Text></Text>
//         </View>
//         );
//     };
// export default xx;

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle= 'dark-content' />
      <Router />
    </SafeAreaView>
    
  );
}
export default App;