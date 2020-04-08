import React, { useState } from 'react'
import { TextInput, TouchableOpacity, Text, Alert, KeyboardAvoidingView, ScrollView, View } from 'react-native'
import styles from './styles'
import InputMask from '../../utils/inputMask'
import { useNavigation } from '@react-navigation/native'


export default function RegisterScreen() {
    let screen = null
    const navigation = useNavigation()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmSenha, setConfirmSenha] = useState('')
    const [submit, setSubmit] = useState(false)

    function register() {
        if(senha === confirmSenha){
            console.log(nome, email, cpf, senha, confirmSenha)
            setSubmit(true)
        }else{
            Alert.alert('Ops',"Senhas não conferem")
        }
    }


    const registerScreen = () => {
        if(submit === false) {
            return (
            <ScrollView style={styles.container} contentContainerStyle={styles.containerChild}>
                <KeyboardAvoidingView style={styles.registerContainer} behavior='padding' enabled={false}>
                    <TextInput
                        value={nome} 
                        onChangeText={texto => setNome(texto)}
                        placeholder='Qual é seu nome?'
                        placeholderTextColor='#7E7E7E'
                        style={styles.registerInput}
                    />

                    <TextInput 
                        value={email}
                        onChangeText={texto => setEmail(texto)}
                        placeholder='Qual é seu melhor E-mail?'
                        placeholderTextColor='#7E7E7E'
                        keyboardType='email-address'
                        style={styles.registerInput}
                    />
                    
                    <TextInput 
                        value={cpf}
                        onChangeText={texto => {setCpf(InputMask.cpf(texto))}}
                        placeholder='Qual é seu CPF?'
                        placeholderTextColor='#7E7E7E'
                        keyboardType='numeric'
                        maxLength={14}
                        style={styles.registerInput}
                    />

                    <TextInput 
                        value={senha}
                        onChangeText={texto => setSenha(texto)}
                        placeholder='Crie uma senha infálivel!'
                        placeholderTextColor='#7E7E7E'
                        secureTextEntry={true}
                        style={styles.registerInput}
                    />

                    <TextInput 
                        value={confirmSenha}
                        onChangeText={texto => setConfirmSenha(texto)}
                        placeholder='Confirme a senha por favor'
                        placeholderTextColor='#7E7E7E'
                        secureTextEntry={true}
                        style={styles.registerInput}
                    />


                    <TouchableOpacity style={styles.registerInputButton} onPress={register}>
                        <Text style={styles.registerInputButtonText}>Registrar</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
            )
        }else{
            return (
            <View style={styles.container2}>
                <View style={styles.msgContainer}>
                    <Text style={styles.message}>Sucesso!</Text>
                    <Text style={styles.message}>Cadastro concluído</Text>

                    <TouchableOpacity style={styles.registerInputButton} onPress={() => setSubmit(false)}>
                        <Text style={styles.registerInputButtonText}>Tentar Novamente</Text>
                    </TouchableOpacity>
                </View>
            </View>
            )
        }
    }

    return registerScreen()
}