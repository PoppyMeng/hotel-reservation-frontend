/* eslint-disable prettier/prettier */
// @flow
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Pressable, ImageBackground, Button } from 'react-native';


const BookingSuccess = ({route, navigation}) => {
    const { order } = route.params;
    return (
        <View>

                <Text >Order #{order.id} Confirmed</Text>
                
                <Pressable  onPress={() => navigation.navigate('Home')} >
                    <Text >Go back to home page</Text>
                </Pressable>
        
        </View>
    );

};
export default BookingSuccess;
