import React, {useState} from "react";
import SelectComponent, {ISelectOption} from "./generic/SelectComponent.tsx";
import useBreedList from "./hooks/useBreedList.ts";
import {IPetAttr} from "./app.tsx";
import Results from "./results.tsx";

const animals = [{
  name: "bird",
  value: "bird"
}, {
  name: "cat",
  value: "cat"
}, {
  name: "dog",
  value: "dog"
}, {
  name: "rabbit",
  value: "rabbit"
}, {
  name: "reptile",
  value: "reptile"
}];

function SearchParams() {

  // const location = "Seattle, WA";

  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [pets, setPets] = useState<IPetAttr[]>([]);

  const [breedList] = useBreedList({animal});
  const [breed, setBreed] = useState("");

  async function requestPets(e: React.MouseEvent<HTMLButtonElement>) {
    try {
      e.preventDefault();
      const petsApiResults = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}&location=${location}`);
      const petsResult = await petsApiResults.json();
      setPets([...petsResult.pets]);
    }catch (e) {
      console.log('error while fetching pets ', e);
    }
  }

  function inputChangeHandler(val: string) {
    setLocation(val);
  }

  function animalChangeHandler(val: string) {
    setAnimal(val);
    const breeds = breedList;
    setBreed(breeds[0]?.value);
  }

  function animalBlurHandler(val: string) {
    setAnimal(val);
    const breeds = breedList as ISelectOption[]
    setBreed(breeds[0]?.value);
  }

  function breedChangeHandler(val: string) {
    setBreed(val);
  }

  function breedBlurHandler(val: string) {
    setBreed(val);
  }

  return <div className="search-params">
    <form>
      <label htmlFor="location">
        Location
        <input id="location" value={location} placeholder="Location" onChange={(e) => {
          inputChangeHandler(e.target.value)
        }}/>
      </label>
      <SelectComponent options={animals} label="Animal" selectId="animal" changeHandlerFn={animalChangeHandler}
                       blurHandlerFn={animalBlurHandler} defaultValue={animal}/>

      <SelectComponent options={breedList as ISelectOption[]} label="Breed" selectId="breed" changeHandlerFn={breedChangeHandler} blurHandlerFn={breedBlurHandler} defaultValue={breed} />
      <button onClick={(e) => requestPets(e)}>Submit</button>
    </form>
    <Results pets={pets} />
  </div>
}

export default SearchParams;
