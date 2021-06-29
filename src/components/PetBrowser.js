import React from "react";

import Pet from "./Pet";

function PetBrowser( { pets, onAdoptPet } ) {

  const petElements = () => {
    return pets.map((pet) => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet}/>
    })
  }

  console.log(pets)
  return <div className="ui cards">{petElements()}</div>;
}

export default PetBrowser;
