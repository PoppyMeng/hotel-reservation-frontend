/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
// @flow
import React from 'react';
import {Text, View, Image } from 'react-native';
import styles from './styles.js';
const Post = (props) => {
    const post = props.post;
    

    return (
        <View style={styles.container}>
            {/* image */}
            <Image
            style={styles.image}
            source={{uri: post.image }}
            />
            {/* bed and bath */}
            <Text style={styles.bedrooms}>{post.bed} bedroom {post.bath} bathroom </Text>
            {/* description*/}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}, {post.title}
            </Text>
            {/* price  */}
            {/* total price */}
            <Text style={styles.prices}>
                <Text style = {styles.price}> ${post.newPrice}</Text>
            </Text>
            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        </View>
        );
    };
export default Post;