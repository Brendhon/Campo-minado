import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import padrao from '../estilo/padrao'

const Validar = props => 
    <Text style = {padrao.ex}>
        {props.label}
        {props.ano + 2000}
    </Text>

Validar.defaultProps = {
    label: 'Ano: ',
    ano: 0
}

Validar.propTypes = {
    ano: PropTypes.number.isRequired
}

export default Validar