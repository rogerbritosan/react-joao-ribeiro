import React from "react";
import CondicaoIf from "./CondicaoIf";

export default function (props) {
  return (
    <div className="component">
      <p className="titulo">Título: {props.titulo}</p>

      <CondicaoIf condicao={props.valor === "Roger"}>
        <p>Verdadeiro</p>
      </CondicaoIf>

      <CondicaoIf condicao={props.valor === "Brito"}>
        <p>Cabrito</p>
      </CondicaoIf>

      <CondicaoIf condicao={props.valor == "Santos"}>
        <p>Santos!</p>
      </CondicaoIf>

    </div>
  );
}
