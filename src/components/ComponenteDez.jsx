import React from "react"

const ComponenteDez = props => {

    const estilos = {color: "red", padding: "10px", border: "1px solid red", margin: "10px"}

    return (
        <div className="component">
            <p className="titulo">
                Título: {props.titulo}
            </p>
            {/* <p style="color: red">Descrição</p> */}
            <p style={{backgroundColor: props.fundo}} >Descrição</p>
        </div>
    )
}
    

export default ComponenteDez