import React from 'react'

import ComponenteFilho from './ComponenteFilho'

function ComponentePai(props){
    return (
        <div className="component">
            <p className="titulo">Tìtulo: {props.titulo}</p>
            <p>Pai</p>
            
            <ComponenteFilho titulo="Componente Filho" cargo="administrador">
                Rogério Brito
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="diretor">
                Anderson Brito
            </ComponenteFilho>

            <ComponenteFilho titulo="Componente Filho" cargo="coordenador">
                Roberto Brito
            </ComponenteFilho>
        </div>
    )
}

export default ComponentePai