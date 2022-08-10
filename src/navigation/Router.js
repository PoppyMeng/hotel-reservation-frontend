/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import {Stack } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';
import { View, Text } from 'react-native';



const Router =(props) => {

    const Stack = createStackNavigator();

    return (
        <View>
            {/* <Text>
                aaa */}
            {/* </Text> */}
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={'Home'}
                        component={HomeScreen}
                        options={{title: 'Home'}}
                    />
                    <Stack.Screen
                        name={'Guests'}
                        component={GuestsScreen}
                        options={{title: "How many people? "}}
                    />

                    <Stack.Screen
                        name={'Post'}
                        component={SearchResultsScreen}
                        options={{
                            title: 'Accommodation',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
        );
    };
export default Router;
