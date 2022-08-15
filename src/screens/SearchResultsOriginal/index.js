/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, FlatList } from 'react-native';
import styles from './styles.js';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const SearchResultsScreen =({ navigation }) => {
    return (
        <View>
            {/* <Text>Not</Text> */}
            <FlatList 
            data ={feed}
            renderItem={({item}) => <Post post ={item}/>}
            />

        </View>
        );
    // eslint-disable-next-line prettier/prettier
    };
export default SearchResultsScreen;