import React from "react";
import {IPetAttr} from "./app.tsx";
import Pet from "./pet.tsx";

interface IResultProps {
  pets: IPetAttr[]
}

function Results({pets}: IResultProps) {
  return (
    <div className="search">
      {!pets.length ? (<h1>No Pets found</h1>) : (
        pets.map((pet) => (
          <Pet {...pet} key={pet.id}/>
        )))
      }
    </div>
  )
}

export default Results;
