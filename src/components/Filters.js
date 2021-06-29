import React from "react";

function Filters( {onChangeType, onFindPetsClick} ) {

  function changeHandle(event) {
    //setting up a callback function to send through the data
    onChangeType(event.target.value)
  }

  function clickHandle() {
    //setting up a calback function for when the button is clicked
    onFindPetsClick()
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select onChange={changeHandle} name="type" id="type" aria-label="type" >
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button onClick={clickHandle} className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
