import React from 'react'

function ComponenteFilha(props){
    return(
        <div className="component">
            <p className="titulo">
                {props.titulo}
            </p>
            <button onClick={props.click}>Click!</button>
        </div>
    )
}

export default ComponenteFilha