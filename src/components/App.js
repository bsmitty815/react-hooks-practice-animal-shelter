import React, { useState, useEffect } from "react";

//in the terminal - npm install
//hen, run - npm run server - to start up json-server on http://localhost:3001
//In another tab, run - npm start - to start up our React app at http://localhost:3000.

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  

  

  useEffect(() => {
    fetch('http://localhost:3001/pets')
    .then(response => response.json())
    .then(petsData => {
      setPets(petsData) //calling setPets to store the data in State
    })
  }, [])

  function onChangeType(dropDownValue) { // funciton to get the value of the drop down
    setFilters({ type: dropDownValue}) // have to pass through an object because State is an object
  }

  function onFindPetsClick() {
    
    if (filters.type === "all") {
      //need to use filters.type beucase it is an object in State
      //run all fetch
      fetch('http://localhost:3001/pets')
      .then(response => response.json())
      .then(petsData => {
        setPets(petsData) //calling setPets to store the data in State
      })

    } else {
      // run this fetch
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
      .then(response => response.json())    //need to use . notation becuase its an object in State
      .then(petsData => {
        setPets(petsData) //calling setPets to store the data in State
      })
    }

  }

  function onAdoptPet(petId) {
    
    //get the pet state
    //find the right pet using the pet id
    //change that is adopted to true
    const newArray = pets.find(({id}) => {
      return id === petId
    })
    console.log(newArray)
    //fetchAgain()
    setPets([...pets, newArray.isAdopted = true]) //merging the updated isAdopted into the current pents array
  }

  function fetchAgain() {
    fetch('http://localhost:3001/pets')
    .then(response => response.json())
    .then(petsData => {
      setPets(petsData) //calling setPets to store the data in State
    })
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
