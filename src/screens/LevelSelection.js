import React from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import styles from '../components/Styles'

export default props => {

    return (

        <Modal onRequestClose={props.onCancel} visible={props.isVisible} animationType = 'slide' transparent={true}>

            <View style={styles.frame}>

                {/* Titulo */}
                <View style={styles.containerLevel}>
                    <Text style={styles.title}>Selecione o Nível</Text>

                    {/* Opção Fácil */}
                    <TouchableOpacity style={[styles.buttonLevel, styles.bgEasy]} onPress={() => props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonLabelLevel}>Fácil</Text>
                    </TouchableOpacity>

                    {/* Opção Intermediário */}
                    <TouchableOpacity
                        style={[styles.buttonLevel, styles.bgNormal]}
                        onPress={() => props.onLevelSelected(0.2)}>
                        <Text style={styles.buttonLabelLevel}>Intermediário</Text>
                    </TouchableOpacity>

                    {/* Opção Difícil */}
                    <TouchableOpacity
                        style={[styles.buttonLevel, styles.bgHard]}
                        onPress={() => props.onLevelSelected(0.3)}>
                        <Text style={styles.buttonLabelLevel}>Difícil</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>

        </Modal>
    )
}