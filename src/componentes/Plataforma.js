import React from 'react'
import { Button, ToastAndroid, Platform } from 'react-native'

export default props => {
    const notificar = msm => {
        if (Platform.OS === 'android')
            ToastAndroid.show(msm, ToastAndroid.SHORT)
        else
            Alert.alert('Informação', msm)
    }
    return (
        <Button title = 'Plataforma'
        onPress = {() => notificar(props.msm)}>
        </Button>
    )
}

