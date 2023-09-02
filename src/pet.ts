import React from "react";

interface IPetAttr {
  name: string;
  breed: string;
  animal: string;
}
function Pet({ name, breed, animal }: IPetAttr) {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("p", {}, animal),
    React.createElement("p", {}, breed),
  ]);
}

export default Pet;
