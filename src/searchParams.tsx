import React, {useState} from "react";
import SelectComponent from "./generic/SelectComponent.tsx";

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
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");


  function inputChangeHandler(val: string) {
    setLocation(val);
  }

  function animalChangeHandler(val: string) {
    setAnimal(val);
    setBreed("");
  }

  function animalBlurHandler(val: string) {
    setAnimal(val);
    setBreed("");
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

      {/*<SelectComponent options={[]} label="Breed" selectId="breed" changeHandlerFn={(e: string)=>{}} blurHandlerFn={(e: string)=> {}} defaultValue={breed} />*/}
      <button>Submit</button>

    </form>
  </div>
}

export default SearchParams;
