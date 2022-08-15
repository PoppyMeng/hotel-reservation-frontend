/* eslint-disable prettier/prettier */
// @flow
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Pressable, ImageBackground, Button } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation, navigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => {
    //const navigation= useNavigation();
    const [users, setUsers] = useState([]);
    const URL = 'http://localhost:8080/api';
    // useEffect
    useEffect(() => {
        axios
            .get(URL + '/users')
            .then((response) => {
                setUsers(() => {
                    return response.data;
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <View>
            {/* search bar */}
            {/* {users.map((user) => <Text>{user.userName}</Text>)} */}


            {/* <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Post')} >
                <Text style={styles.searchBarText}>Joshua Tree Bubble Hotel, California   </Text>
                <Fontisto name="search" size={20} color={'#f15454'} />
            </Pressable> */}

            <ImageBackground
                source={require('../../../assets/images/wallpaper3.jpeg')}
                style={styles.image}
            >
                {/* title */}
                <Text style={styles.title}>Explore The World</Text>
                {/* search button */}
                <Pressable style={styles.button} onPress={() => navigation.navigate('Post')} >
                    <Text style={styles.buttonText}>Let's Start Booking!</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('OrderReview')} >
                    <Text style={styles.buttonText}>View My Orders</Text>
                </Pressable>
                
            </ImageBackground>
        </View>
    );

};
export default HomeScreen;
