/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import GuestsScreen from './src/screens/Guests';
import Router from './src/navigation/Router';


const post1 = feed[0];
const post2 = feed[1];

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle= 'dark-content' />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post2} /> */}
        {/* <SearchResultsScreen/> */}
        {/* <GuestsScreen /> */}
        <Router/>
      </SafeAreaView>
    </>
    );
  };
  // eslint-disable-next-line prettier/prettier
  export default App;




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