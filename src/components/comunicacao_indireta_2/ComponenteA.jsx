import React from 'react'

import ComponenteB from './ComponenteB'

export default (props) => {

    function executar(valor){
        console.log(valor)
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