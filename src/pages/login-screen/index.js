import React from 'react'
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import logo from '../../../assets/icon.png'
import { Feather } from '@expo/vector-icons'

export default function loginScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={logo} />
            </View>

            <View style={styles.loginContainer}>  
                <TextInput placeholder="Insira seu E-mail" style={styles.loginInput} />
                <TextInput placeholder="Insira sua senha" secureTextEntry={true} style={styles.loginInput} />
                <TouchableOpacity style={styles.buttonIniciar}>
                    <Text style={styles.buttonInputText}>INICIAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerLinkContainer}>
                    <Text style={styles.registerLink}>Não possuo cadastro</Text>
                    <Feather name='log-in' size={18} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    )
}