import React from 'react'
import clientes from '../dados_clientes/dados_clientes'

const ComponenteSeis = (props) => {

    function cliente(){
        return clientes.map(cliente => {
            return <li key={cliente.id_cliente}>Nome: {cliente.nome} | email: {cliente.email}</li>
        })
    }

    return (
        <>
            <div className="component">
                <p className="titulo">Título: {props.titulo}</p>

                <ul>
                    {cliente()}
                </ul>

            </div>
        </>
    )
}

export default ComponenteSeis