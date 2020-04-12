import { BackHandler } from 'react-native'
import { useBackHandler } from '@react-native-community/hooks'

export default function BackHandler() {
    useBackHandler(() => {
        let exit = true

        if(next){
            

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
}