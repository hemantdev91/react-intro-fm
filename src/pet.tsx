import React from "react";
import {IPetAttr} from "./app.tsx";

function Pet({name, breed, animal}: IPetAttr) {
  return (<div>
      <h2>{name}</h2>
      <p>{animal}</p>
      <p>{breed}</p>
    </div>
  )
}

export default Pet;
