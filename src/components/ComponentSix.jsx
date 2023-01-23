import React from 'react'

const ComponentSix = props => {
    return (
        <div className="component">
            <p>Título: {props.titulo}</p>
            <p>Subtítulo: {props.subtitulo}</p>
            {/* <p>Linha de comentário</p> */}
        </div>        
    )
}

export default ComponentSix