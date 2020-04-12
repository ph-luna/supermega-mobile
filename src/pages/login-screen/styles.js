import { StyleSheet } from 'react-native'
import Color from '../../constants/colors'

export default StyleSheet.create({
    Container: {
        backgroundColor: Color.primary,
        width: '100%',
        maxWidth: 300,
        justifyContent: 'center',
        alignItems: 'center',
        height: 350,
        borderRadius: 20    
    },

    loginInput: {
        width: 240,
        maxWidth: '100%',
        height: 48,
    },

    buttonIniciar: {
        width: 150, 
        maxWidth: '100%',
        height: 50,
        marginTop: 20,
        marginBottom: 30,
        backgroundColor: Color.secundary
    },

    registerLink: {
        color: Color.thirdy,
        textDecorationLine: 'underline'
    },

    registerLinkContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },

    img: {
        width: 200,
        height: 200,
    },

    imgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})