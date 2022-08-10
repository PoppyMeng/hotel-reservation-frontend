/* eslint-disable prettier/prettier */
// @flow
import * as React from 'react';
import {View, Text, Pressable, ImageBackground, Button} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation, navigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({navigation}) => {
    //const navigation= useNavigation();

    return (
        <View>
            {/* search bar */}
            <Pressable style={styles.searchButton} onPress={()=> navigation.navigate('Post')} >
                <Text style={styles.searchBarText}>Joshua Tree Bubble Hotel, California   </Text>
                <Fontisto name="search" size={20} color={'#f15454'} />
            </Pressable>

            <ImageBackground
            source ={require('../../../assets/images/wallpaper3.jpeg')}
            style ={styles.image}
            >
                {/* title */}
                <Text style ={styles.title}>Explore The World</Text>
                {/* search button */}
                <Pressable style={styles.button} onPress={()=> navigation.navigate('Post')} >
                    <Text style={styles.buttonText}>See Nearby Hotels</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );

};
export default HomeScreen;
