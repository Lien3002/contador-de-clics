import React from "react";

export function Boton({ texto, esBotonClic, manejarClic }) {
  return (
    <button className={ esBotonClic ? "boton-clic" : "bonton-reiniciar" }
    onClick={manejarClic}>
      {texto}
    </button>
  );
}
