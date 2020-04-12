import React, { useState } from 'react'
import { Image, View, Alert, BackHandler } from 'react-native'
import { useBackHandler } from '@react-native-community/hooks'

import Screen from '../../components/Screen'
import Txt from '../../components/Txt'
import Steward from '../../../assets/img/steward.png'
import styles from './styles'
import TouchButton from '../../components/TouchButton'
import TxtInput from '../../components/TxtInput'

export default function HomeScreen(props){
    const [next, setNext] = useState(false)  
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

    useBackHandler(() => {
        let exit = true

        if(next){
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

            setNext(false)

            return exit

        }else{
            Alert.alert('SAIR', 'Tem certeza que quer sair?',[
                {   
                    text: 'sim', 
                    onPress: () => {
                        BackHandler.exitApp()
                        exit = false
                    },
                    style: 'default' 
                },
        
                { 
                    text: 'não', 
                    onPress: ()=>{}, 
                    style: 'default'
                }
            ])

            return exit
        }
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
                <TxtInput placeholder="> Insira aqui..." style={{ height: 50 }} />
            </View>
        </Screen>
        )

        setNext(true)
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

        setNext(true)
    }
    
    return content
}   