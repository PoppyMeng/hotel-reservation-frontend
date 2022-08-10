/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';


const GuestsScreen = ({navigation}) => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    // const navigation = useNavigation();
    return (
        
        <View>
            <View style={styles.row} >
                {/* row 1 adult, titles, */}
                <View>
                    <Text style={{fontWeight: 'bold'}}>Adults</Text>
                    <Text style={{color: '#8d8d8d'}}>Age 14+ </Text>
                </View>

                {/* buttons with value */}
                <View style={styles.row}>
                    <Pressable onPress={()=>setAdults(Math.max(0,adults - 1))}  style={styles.button}>
                        <Text>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal: 20, marginTop: 4, fontSize:16 }}>{adults}</Text>
                    <Pressable onPress={()=>setAdults(adults + 1)}  style={styles.button}>
                        <Text style={{fontSize:20 }}>+</Text>
                    </Pressable>
                </View>
            </View >
            
            <View style={styles.row} >
                {/* row 1 adult, titles, */}
                <View>
                    <Text style={{fontWeight: 'bold'}}>Children</Text>
                    <Text style={{color: '#8d8d8d'}}>Age 0-13 </Text>
                </View>

                {/* buttons with value */}
                <View style={styles.row}>
                    <Pressable onPress={() => setChildren(Math.max(0, children - 1)) } style={styles.button}>
                        <Text>-</Text>
                    </Pressable>
                    <Text style={{marginHorizontal: 20, marginTop: 4, fontSize:16 }}>{children}</Text>
                    <Pressable onPress={()=>setChildren(children + 1) } style={styles.button}>
                        <Text style={{fontSize:20 }}>+</Text>
                    </Pressable>
                </View>
            </View >
            {/* check in date and check out date as a form */}
            {/* search button to get all available rooms */}
            <Pressable
                onPress={() => //this is a nested navigation
                    navigation.navigate('Home', {
                        screen: 'Home',
                        params: {
                        screen: 'SearchResults',// 点击最终会到searchresult page
                        params: {
                            // date: 
                            // guests: adults + children,
                            // viewport: route.params.viewport,
                            },
                        },
                    })
                }
                style={{
                marginBottom: 20,
                // backgroundColor: '#f15454',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                marginHorizontal: 20,
                borderRadius: 10,
                }}>

                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Search Room</Text>
            </Pressable>
        </View>
        
        );
    };
export default GuestsScreen;
