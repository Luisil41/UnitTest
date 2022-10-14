/**
 * Ejemplo de uso de los siguientes hooks:
 * - useState()
 * - useRef() referenciar elementos dentro de la vista
 * - useEffect() este nos va a servir para controlar los ciclos de cambio en la vista
 */

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  //Creacion de dos contadores distintos
  //cada uno en un estado diferente

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  //Vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }

  function incrementar2() {
    setContador2(contador2 + 1);
  }

  /**
   * Trabajando con useEffect
   *
   */

  /**
   * Caso 1, ejecutar siempre un code snippet
   * Cada vez que hay un cambio en el estado del componente,
   * se ejecuta aquello que esté dentro del useEffect()
   */

  //useEffect(() => {
  //  console.log('Cambio en el estado del componente');
  //  console.log('Mostrando referencia a elemento del DOM: ');
  //  console.log(miRef);
  //
  // })

  /**
   * Caso 2
   * Solo ejecutar cuando cambie el contador 1
   * se ejecuta lo que diga el useEffect
   * en caso de que cambie contador 2 no habrá ejecución
   */

  useEffect(() => {
    console.log("Cambio en el estado del componente");
    console.log("Mostrando referencia a elemento del DOM: ");
    console.log(miRef);
  }, [contador1]);

  return (
    <div>
      <h1>*** Ejemplo de useState()m useRef() y useEffect() ***</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 2: {contador2}</h2>
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
