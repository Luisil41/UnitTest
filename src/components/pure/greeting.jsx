import React, { useState } from "react";
import PropTypes from "prop-types";

const Greeting = (props) => {
  //Estructura set state, [variable, método de actualizacion] = useState(Valor inicial)
  const [age, setAge] = useState(32);

  const birthday = () => {
    //método que se encarga de actualizar la edad
    setAge(age + 1);
  };

  return (
    <div>
      <h1>¡ Hola {props.name} cada día te haces mas mayor !</h1>
      <h1>Tu edad es de: {age}</h1>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};
Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
