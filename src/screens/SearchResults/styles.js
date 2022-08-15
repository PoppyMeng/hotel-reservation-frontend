/* eslint-disable prettier/prettier */
import { StyleSheet, } from 'react-native';


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button1: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,//a circle
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    button: {
        backgroundColor: '#fff',
        width: 160,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    groupButton:{
        //margin: 0 'auto',
        //display: 'inline',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default styles;
