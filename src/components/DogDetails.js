import React from "react";

function DogDetails({ dogDetails, onGoodDogClick }) {
  function changeGoodDog() {
    fetch(`http://localhost:3001/pups/${dogDetails.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({isGoodDog: !dogDetails.isGoodDog})
    }).then(response => response.json())
      .then(data => onGoodDogClick(data))
  }

  return (
    <>
      <img src={dogDetails.image} alt={dogDetails.name} />
      <h2>{dogDetails.name}</h2>
      {(dogDetails !== "") ? <button onClick={changeGoodDog}>{dogDetails.isGoodDog ? "Good Dog!" : "Bad Dog!" }</button> : null}
    </>
  );
}

export default DogDetails;
