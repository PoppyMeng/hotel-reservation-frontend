/* eslint-disable prettier/prettier */
import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {Stack } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/SearchResults';
import OrderScreen from '../screens/Orders';
import BookingSuccess from '../screens/BookingSuccess';
import OrderReview from '../screens/OrderReview';
import HomeTabNavigator from './HomeTabNavigator';
import { View, Text } from 'react-native';



const Router = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Home'}
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={'Post'}
                    component={SearchResultsScreen}
                    options={{
                        title: 'Accommodation',
                    }}
                />

                <Stack.Screen
                    name={'Orders'}
                    component={OrderScreen}
                    options={{ title: "Order review" }}
                />
                <Stack.Screen
                    name={'BookingSuccess'}
                    component={BookingSuccess}
                    options={{ title: "room booked" }}
                />
                <Stack.Screen
                    name={'OrderReview'}
                    component={OrderReview}
                    options={{ title: "My Orders" }}
                />

            </Stack.Navigator>
        </NavigationContainer>

    )
};
export default Router;
