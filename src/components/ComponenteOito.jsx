import React from "react";

export default function(props){

    function condicao(){
        // if(props.valor >= 10){
        //     return <p>O valor é igual ou superior a 10</p>
        // } else {
        //     return <p>Valor inferior a 10</p>
        // }

        switch(props.valor){
            case "João":
                return <p>John é o meu nome</p>
                break;
            case "Ana":
                return <p>Ana é meu nome</p>
                break;
            default:
                return <p>Desconheço esse nome</p>
        }

    }

    return (
        <div className="component">
            <p className="titulo">
                <p>Título: {props.titulo}</p>
                {condicao()}
            </p>
        </div>
    )
}