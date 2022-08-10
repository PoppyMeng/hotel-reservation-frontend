/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2, //fixed height width ratio
        resizeMode: 'cover',
        borderRadius: 10,
    },

    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b',
    },

    description: {
        fontSize: 18,
        lineHeight: 26,
    },

    prices: {
        fontSize: 18,
        marginVertical: 10,
    },

    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through', //cross the old price
    },

    price: {
        fontWeight: 'bold',
    },

    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    },
});

export default styles;
