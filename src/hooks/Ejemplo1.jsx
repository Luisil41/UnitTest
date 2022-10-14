//Ejemplo de uso para el useState
//Creacion de componente de tipo funcion y acceder a tu estado privado a través de un hook y ademas poder modificarlo

import React, { useState } from "react";

const Ejemplo1 = () => {
  // Valor inicial para el contador
  const valorInicial = 0;

  // Valor inicial para una persona

  const personaInicial = {
    nombre: "Luis",
    email: "emaildelewisham@email.com",
  };


/**
 * La idea es que el valor inicial y persona inicial
 * sean parte del estado del componente para
 * poder gestionar el cambio y que se este se vea reflejado
 * en la vista del componente
 *
 * const [nombre de la variable, funcion para cambiar] = useState(valorInicial)
 */

const [contador, setContador] = useState(valorInicial);
const [persona, setPersona] = useState(personaInicial);

/**
 * Funcion para actualizar el estado privado que contiene el contador
 */
function incrementarContador() {
  //Funcion para cambiar
  setContador(contador + 1);
}

/**
 * Funcion para actualizar el estado de persona en el componente
 */
function actualizarPersona() {
  setPersona({
    nombre: "Pepe",
    email: "pepe@emailfake.com",
  });
}

return (<div>
<h1>*** Ejemplo de usestate() ***</h1>
<h2>contador: {contador}</h2>
<h2>DATOS DE LA PERSONA:</h2>
<h3>Nombre: {persona.nombre}</h3>
<h3>email: {persona.email}</h3>
//Botones para actualizar e incrementar<br/><br/>
<button onClick = {incrementarContador}>Incrementa el contador en 1</button>
<button onClick = {actualizarPersona}>Actualice la persona</button>
</div>

);

};
export default Ejemplo1;
