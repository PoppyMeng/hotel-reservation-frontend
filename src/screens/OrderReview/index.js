/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, Pressable, FlatList, Image, TextInput, NativeEventEmitter} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
import OrderItem from '../../components/OrderItem';
import feed from '../../../assets/data/feed';
import { URL } from '../../../constants';
import axios from 'axios';


const OrderReview= ({  navigation }) => {
    const [email, setEmail] = useState('');
    const [orders, setOrders] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const getOrderByEmail =()=>{
        axios
            .get(URL + `/users/email/${email}/orders`)
            .then((response) => {
                setOrders(response.data);
                setHasSearched(true);
            })
            .catch((error) => {
                console.log(error);
                setOrders([]);
                setHasSearched(true);

            });
            
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Pls enter your email"
                autoCapitalize='none'
            />
            <Pressable style={styles.button} onPress={() => getOrderByEmail()} >
                <Text style={styles.buttonText}>Search My Orders</Text>
            </Pressable>
            {hasSearched && (orders.length === 0? (
                <Text>No order found</Text>
            ): (
                    <FlatList
                        data={orders}
                        renderItem={({item}) => <OrderItem order={item} />}
                    />
            ))}
            
        </View>
        
        );
    };
export default OrderReview;
