import React from "react";

function DogList({ dogs, onDogClick }) {
  const dogsArray = dogs.map(dog => {
    return <span key={dog.id} onClick={() => onDogClick(dog)}>{dog.name}</span>
  })
  return (
    <>
      {dogsArray}
    </>
  );
}

export default DogList;
