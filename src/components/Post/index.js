/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
// @flow
import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import styles from './styles.js';
const Post = (props) => {
    const post = props.post;

    const id = post.id;
    const navigation = props.navigation;
    return (
        <View style={styles.container}>
            {/* image */}
            <Image
                style={styles.image}
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }}
            />
            {/* room name */}
            <Text style={styles.bedrooms}>{post.name} </Text>
            {/* description*/}
            <Text style={styles.description} numberOfLines={2}>{post.address}</Text>
            <Text style={styles.bedrooms}>${post.pricePerNight} per night </Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Orders', {
                room: post,
                startDate: props.startDate,
                endDate: props.endDate,
            })} >
                <Text style={styles.buttonText}>Book This Room</Text>
            </Pressable>


        
        </View>
    );
};
export default Post;