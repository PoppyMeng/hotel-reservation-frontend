/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
// @flow
import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './styles.js';
import { displayDate, makeDateSearchString, makeDateFromSearchString } from '../../dateHelper.js'; 

const OrderItem = (props) => {
    const order = props.order;

    return (
        <View style={styles.container}>
            {/* image */}
            <Image
                style={styles.image}
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }}
            />
            {/* room name */}
            <Text style={styles.bedrooms}>{order.room.name} </Text>
            <Text style={styles.bedrooms}>Order Id: {order.id}</Text>
            <Text style={styles.description} >{order.room.address}</Text>
            <Text style={styles.bedrooms}>${order.room.pricePerNight} per night </Text>
            <Text style={styles.bedrooms}>From {makeDateFromSearchString(order.startTime)} to {makeDateFromSearchString(order.endTime)}</Text>
            {/* <Text style={styles.bedrooms}>From {order.startTime} to {order.endTime}</Text> */}

        </View>
    );
};
export default OrderItem;