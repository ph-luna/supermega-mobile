import { StyleSheet } from 'react-native'
import Color from '../../constants/colors'

export default StyleSheet.create({
    searchContainer: {
        backgroundColor: Color.secundary,
        width: '100%',
        height: 80,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    searchInput: {
        borderRadius: 0,
        height: 40,
        width: '80%',
        marginHorizontal: 15
    },

    searchButton: {
        backgroundColor: Color.primary,
        width: 50,
        height: 50,
        borderRadius: 40
    },

    itemContainer: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    itemImg: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: Color.primary
    },

    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    descriptionContainer: {
        width: 250, 
        maxWidth: '80%'
    },

    itemName:{
        fontFamily: 'rubik-medium',
        fontSize: 20
    },

    itemCommerce: {
        fontFamily: 'rubik-italic'
    }
})