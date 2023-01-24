import React from 'react'

// components
import ComponentOne from './components/ComponentOne'
import ComponentTwo from './components/ComponentTwo'
import ComponentThree from './components/ComponentThree'
import ComponentFour from './components/ComponentFour'
import ComponentFive from './components/ComponentFive'
import ComponentSix from './components/ComponentSix'
import ComponentSeven from './components/ComponentSeven'
import ComponenteSeis from './components/ComponenteSeis'
import ComponenteSete from './components/ComponenteSete'
import ComponenteOito from './components/ComponenteOito'
import ComponenteNove from './components/ComponenteNove'
import ComponenteDez from './components/ComponenteDez'
import ComponentePai from './components/comunicacao_direta/ComponentePai'
import ComponenteMae from './components/comunicacao_indireta/ComponenteMae'
import ComponenteA from './components/comunicacao_indireta_2/ComponenteA'
import ComponenteC from './components/comunicacao_indireta_2/ComponenteC'

function App(){
    return(
        <>
            <ComponenteC titulo="Comunicação indireta 2"></ComponenteC>
            <ComponenteA titulo="Comunicação indireta 2"></ComponenteA>
            <ComponenteMae titulo="Comunicação indireta"></ComponenteMae>
            <ComponentePai titulo="Comunicação Direta"></ComponentePai>
            <ComponenteDez titulo="Pelé" fundo="yellow" />
            <ComponenteNove titulo="Componente nove" valor="Santos" />
            <ComponenteOito titulo="Componente oito" valor="Ana" />
            <ComponenteSete titulo="Componente sete" valor={false} />
            <ComponenteSete titulo="Componente sete" valor={0} />
            <ComponenteSete titulo="Componente sete" valor={true} />
            <ComponenteSeis titulo="Componente seis" />
            <ComponentSeven titulo="Títul3o sete" />
            <ComponentSix titulo="Título do componente seis" subtitulo="Subtítulo do componente seis" />
            <ComponentFive titulo="Sem nome, simplificado e com nome das propriedades" />
            <ComponentFour />
            <ComponentThree />
            <ComponentTwo />
            <ComponentOne />
        </>
    )
}

export default App