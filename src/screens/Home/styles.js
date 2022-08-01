/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 800,
        resizeMode: 'cover', //make sure the image cover the whole view it displays
        justifyContent: 'center', //text is centered horizontally in image
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        width: '60%',
        marginLeft: 25, //text is 25 from left
        marginTop: -300,
    },
    button: {
        backgroundColor: '#fff',
        width: 180,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchBarText: {
        fontSize: 17,
        color: 'grey',
        // marginLeft: -5,
        // fontWeight: 'bold',
    },
    searchButton: {
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width - 20, //width is based on the dimension of the screen, dynamic
        borderRadius: 30, //half height to make it circle
        marginHorizontal: 10, //space of the white bar from the side of screen
        flexDirection: 'row', //place icon side by side
        justifyContent: 'center', //text is at the center horizantally
        alignItems: 'center',
        position: 'absolute', //search bar will freeze at the top if scroll thd page
        top: 50, //50 from top
        zIndex: 100, //make sure component is on top of everything else
    },
    searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    },
});

export default styles;
