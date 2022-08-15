/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, Pressable, FlatList, Image, TextInput, NativeEventEmitter} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
import Post from '../../components/Post';
import feed from '../../../assets/data/feed';
import { URL } from '../../../constants';
import axios from 'axios';


const OrderScreen = ({ route, navigation }) => {
    const {room,startDate, endDate} = route.params;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const confirmBooking =()=>{
        axios
            .post(URL + '/orders/book', {
                startTime:startDate,
                endTime: endDate,
                email: email,
                userName: name,
                roomId: room.id,
            })
            .then((response) => {
                navigation.navigate('BookingSuccess', {
                    order: response.data,
                    
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <View style={styles.container}>
            {/* image */}
            <Image
                style={styles.image}
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }}
            />
            {/* room name */}
            <Text style={styles.bedrooms}>{room.name} </Text>
            {/* description*/}
            <Text style={styles.description} numberOfLines={2}>{room.address}</Text>
            <Text style={styles.bedrooms}>{room.pricePerNight} </Text>
            <Text style={styles.bedrooms}>From {startDate} to {endDate}</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="your email"
            />
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="your name"
            />
            <Pressable style={styles.button} onPress={() => confirmBooking()} >
                <Text style={styles.buttonText}>Book This Room</Text>
            </Pressable>

        </View>
        
        );
    };
export default OrderScreen;
