import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './componentes/Simples'
import Contador from './componentes/Contador'
import Plataforma from './componentes/Plataforma'
import ParImpar from './componentes/ParImpar'
import Validar from './componentes/Validar'
import Evento from './componentes/Evento'
import { Inverter, MegaSena } from './componentes/Multi';

export default createDrawerNavigator({
    Evento: {
        screen: Evento
    },
    Validar: {
        screen: () => <Validar ano = {18}/>
    },
    Plataforma: {
        screen: () => <Plataforma msm = 'Sucesso'/>
    },
    Contador: {
        screen: () => <Contador numeroInicial = {100}/>
    },
    ParImpar: {
        screen: () => <ParImpar numeros={40} />,
        navigationOptions: { title: 'Par e Impar' }
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'MegaSena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React' />
    },
    Simples: {
        screen: () => <Simples texto='Flexivel!' />
    }
},
    {
        drawerWidth: 200,
        drawerBackgroundColor: '#BDFFB5',
    }) 