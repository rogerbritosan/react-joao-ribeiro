import React from 'react'

import ComponenteB from './ComponenteD'

export default (props) => {

    function executar(valor1, valor2){
        console.log(valor1)
        console.log(valor2)
    }

    return(
        <div className="component">
            <p className="titulo">
                {props.titulo}
            </p>
            <ComponenteB titulo="Filho" funcao={executar} />
        </div>
    )
}