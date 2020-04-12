import { StyleSheet } from 'react-native'
import Color from '../../constants/colors'

export default StyleSheet.create({
    registerContainer: {
        width: '90%',
        maxWidth: 315,
        height: 580,
        backgroundColor: Color.primary,
        borderRadius: 20,
        justifyContent: 'space-evenly',
        alignItems:'center'
    },

    registerInput: {
        width: '85%',
        maxWidth: 260,
        height: 50,
    },

    registerInputButton: {
        backgroundColor: Color.secundary,
        width: 175,
        height: 80,
        marginVertical: 40,
    },
})