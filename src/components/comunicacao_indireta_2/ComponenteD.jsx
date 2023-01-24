import React from 'react'

export default (props) => {

    let valor1 = 100;

    function executar(){
        valor1 = Math.random()
        props.funcao('Valor: ' + valor1, '@rogerbritosan')
    }

    return(
        <div className="component">
            <p className="titulo">
                {props.titulo}
            </p>
            <button onClick={executar}>Executar</button>
            <p>{valor1}</p>
        </div>
    )
}