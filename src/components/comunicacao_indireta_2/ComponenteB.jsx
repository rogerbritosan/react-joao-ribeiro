import React from 'react'

export default (props) => {
    return(
        <div className="component">
            <p className="titulo">
                {props.titulo}
            </p>
            <button onClick={() => {
                props.funcao(Math.random() * 10)
            }}>Executar</button>
        </div>
    )
}