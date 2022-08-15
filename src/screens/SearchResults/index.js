/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, FlatList, TextInput , Pressable} from 'react-native';
import styles from './styles.js';
// import feed from '../../../assets/data/feed';
import Post from '../../components/Post';
import {URL} from '../../../constants';
import axios from 'axios';


const SearchResultsScreen = ({ navigation }) => {
    const [hasSearched, setHasSearched] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [feed, setFeed] = useState([]);
    const [People, setPeople] = useState(0);
    const [children, setChildren] = useState(0);

    const searchRooms = () =>{
        axios
            .get(URL + `/rooms/available/${startDate}/${endDate}`)
            .then((response) => {
                setFeed(() => {
                    return response.data;
                });
                setHasSearched(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    
    
    return (

        <View>
            {/* <Text>Not</Text> */}
            <TextInput
                style={styles.input}
                onChangeText={setStartDate}
                value={startDate}
                placeholder="start date"
            />
            <TextInput
                style={styles.input}
                onChangeText={setEndDate}
                value={endDate}
                placeholder="end date"
            />
            <View style={styles.row} >
                {/* row 1 adult, titles, */}
                <View>
                    <Text style={{ fontWeight: 'bold' }}>People</Text>
                    <Text style={{ color: '#8d8d8d' }}>Age 4+ </Text>
                </View>

                {/* buttons with value */}
                <View style={styles.row}>
                    <Pressable onPress={() => setPeople(Math.max(0, People - 1))} style={styles.button1}>
                        <Text>-</Text>
                    </Pressable>
                    <Text style={{ marginHorizontal: 20, marginTop: 4, fontSize: 16 }}>{People}</Text>
                    <Pressable onPress={() => setPeople(People + 1)} style={styles.button1}>
                        <Text style={{ fontSize: 20 }}>+</Text>
                    </Pressable>
                </View>
            </View >

            <View style={styles.groupButton}>
                <Pressable style={styles.button} onPress={()=> searchRooms()}>
                    <Text style={styles.buttonText}>Search</Text>
                </Pressable>

            </View>
            {hasSearched && (feed.length === 0 ? (
                <Text>No Available Rooms Found!</Text>
            ) : (
                    <FlatList
                        data={feed}
                        renderItem={({ item }) => <Post post={item} navigation={navigation} startDate={startDate} endDate={endDate} />}
                    />
            ))}

        </View>
        );
    // eslint-disable-next-line prettier/prettier
    };
export default SearchResultsScreen;