import React, {useEffect, useState} from "react";
import Pet from "./pet.tsx";


export interface IPetAttr {
  name: string;
  breed: string;
  animal: string;
}

const staticPets = [
  {name: "Luna", breed: "Havanese", animal: "Dog"},
  {name: "Pepper", breed: "Cockatiel", animal: "Bird"},
  {name: "Doink", breed: "Mix", animal: "Cat"},
];

function App() {
  const [pets, setPets] = useState<IPetAttr[]>([]);


  useEffect(() => {
    setPets([...staticPets]);
  }, [])
  return (<div style={{marginLeft: "15px"}}>
    <h1>Adopt me!!!</h1>
    {
      pets && (pets.map(({name, breed, animal}) => <Pet key={name} name={name} breed={breed} animal={animal}/>))
    }
  </div>)
}

export default App;
