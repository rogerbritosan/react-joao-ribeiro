import React from "react";

export default function(props){
    return (
        <div className="component">
            <p className="titulo">
                Título: {props.titulo}
            </p>
            {/* {props.valor ? <p>Verdadeiro</p> : <p>Falso</p>} */}
            {
                props.valor ? 
                <div>
                    <p>Verdadeiro</p>
                </div>
                : 
                <div>
                    <p>Falso</p>
                </div>
                }
        </div>
    )
}