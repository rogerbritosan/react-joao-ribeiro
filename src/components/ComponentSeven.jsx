import React from 'react'
import ComponenteCinco from './ComponenteCinco'

const ComponentSeven = props => {
    return (
        <div className="component">
            <p>Título: {props.titulo}</p>
            <ComponenteCinco descricao="top demais da conta" />
            <ComponenteCinco descricao="top demais da conta" />
            <ComponenteCinco descricao="top demais da conta" />
            <ComponenteCinco descricao="top demais da conta" />
        </div>
    )
}

export default ComponentSeven