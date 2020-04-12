import React, { useState, useEffect } from 'react'
import { Image, View, Alert, BackHandler } from 'react-native'
import { useBackHandler } from '@react-native-community/hooks'
import { useNavigation } from '@react-navigation/native'

import Screen from '../../components/Screen'
import Txt from '../../components/Txt'
import Steward from '../../../assets/img/steward.png'
import styles from './styles'
import TouchButton from '../../components/TouchButton'
import TxtInput from '../../components/TxtInput'

export default function HomeScreen(props){
    const  navigation = useNavigation()
    const [next, setNext] = useState(1)  
    const [content, setContent] = useState(
        <Screen>
            <View style={styles.stewardContainer}>
                <Image source={Steward} style={styles.img} />
                <Txt style={{fontSize: 20}}>Olá [nome do usuario]</Txt>
                <Txt style={{fontSize: 20}}>O que posso fazer por você hoje?</Txt>
            </View>

            <View style={styles.optionContainer}>
                <TouchButton style={styles.firstOption} onPress={optOneHandler} textStyle={styles.optionText}>Encontre a melhor oferta</TouchButton>
                <TouchButton style={styles.secondOption} onPress={optTwoHandler} textStyle={styles.optionText}>Encontre um comércio ou produto próximo</TouchButton>
            </View>
        </Screen>
    )

    function navigateToProductList(){
        navigation.navigate('ProductList')
        setNext(0)
    }

    useBackHandler(() => {
        if(next === 2){
            setContent(
                <Screen>
                    <View style={styles.stewardContainer}>
                        <Image source={Steward} style={styles.img} />
                        <Txt style={{fontSize: 20}}>Olá [nome do usuario]</Txt>
                        <Txt style={{fontSize: 20}}>O que posso fazer por você hoje?</Txt>
                    </View>

                    <View style={styles.optionContainer}>
                        <TouchButton style={styles.firstOption} onPress={optOneHandler} textStyle={styles.optionText}>Encontre a melhor oferta</TouchButton>
                        <TouchButton style={styles.secondOption} onPress={optTwoHandler} textStyle={styles.optionText}>Encontre um comércio ou produto próximo</TouchButton>
                    </View>
                </Screen>
            )

            setNext(1)

            return true

        }else if(next === 1){
            Alert.alert('SAIR', 'Tem certeza que quer sair?',[
                {   
                    text: 'sim', 
                    onPress: () => {
                        BackHandler.exitApp()
                    },
                    style: 'default' 
                },
        
                { 
                    text: 'não', 
                    onPress: ()=>{}, 
                    style: 'default'
                }
            ])

            return true
        }
        setNext(2)
        return false
    })

    function optOneHandler(){
        setContent(
        <Screen>
            <View style={styles.stewardContainer}>
                <Image source={Steward} style={styles.img} />
                <Txt style={{fontSize: 20}}>Certo,</Txt>
                <Txt style={{fontSize: 20}}>me informe o nome do produto:</Txt>
            </View>

            <View style={styles.inputContainer}>
                <TxtInput placeholder="> Insira aqui..." style={{ height: 50 }} onSubmitEditing={() => navigateToProductList()} />
            </View>
        </Screen>
        )

        setNext(2)
    }

    function optTwoHandler() {
        setContent(
            <Screen>
                <View style={styles.stewardContainer}>
                    <Image source={Steward} style={styles.img} />
                    <Txt style={{fontSize: 20}}>Certo,</Txt>
                    <Txt style={{fontSize: 20}}>me informe o nome do comercio:</Txt>
                </View>

                <View style={styles.inputContainer2}>
                    <TxtInput placeholder="> Insira aqui..." style={{ height: 50 }} />
                </View>
            </Screen>
        )

        setNext(2)
    }
    
    return content
}   