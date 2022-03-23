import React, { useEffect, useState } from "react";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function App() {
  const [dogs, setDogs] = useState([]);
  const [dogDetails, setDogDetails] = useState("");
  const [filterGood, setFilterGood] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then(response => response.json())
      .then(data => setDogs(data))
  }, [])

  function handleGoodDogClick(updatedDog) {
    const newDogs = dogs.map(dog => {
      if (dog.id === updatedDog.id) {
        return {...dog, isGoodDog: updatedDog.isGoodDog}
      } else { return dog }
    })
    setDogs(newDogs);
    setDogDetails(updatedDog);
  }

  const dogsToDisplay = dogs.filter(dog => {
    if (filterGood) {
      return dog.isGoodDog === true;
    } else { return true }
  })

  return (
    <div className="App">
      <div id="filter-div">
        <button 
          id="good-dog-filter" 
          onClick={() => setFilterGood(!filterGood)}
        >Filter good dogs: {filterGood ? "ON" : "OFF" }</button>
      </div>
      <div id="dog-bar">
        <DogList dogs={dogsToDisplay} onDogClick={setDogDetails} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"><DogDetails dogDetails={dogDetails} onGoodDogClick={handleGoodDogClick}/></div>
      </div>
    </div>
  );
}

export default App;
