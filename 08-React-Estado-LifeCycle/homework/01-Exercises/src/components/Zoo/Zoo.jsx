import React,{ useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";
// import styledZoo from "./Zoo.module.css"

export default function Zoo() {
  /* Escribe acá tu código */

  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: []
  })


  const handleInputChange = (event) => {
    setZoo({
      zooName: event.target.value,
    });
  };


  // const handleInputChange = (event) => {
  //   const newValue = event.target.value;
  
  //   // Verificar si el nuevo valor es diferente al valor actual
  //   if (newValue !== zoo.zooName) {
  //     setZoo({
  //       ...zoo,
  //       zooName: newValue,
  //     });
  //   }
  // };



  fetch('http://localhost:3001/zoo')
    .then((res) => res.json())
    .then((data) =>
      setZoo({
        ...zoo,
        animals: data.animals,
        species: data.species,
        allAnimals: data.animals,
      })
    )
    .catch((error) => console.log(error));

    const handleSpecies = (event)=>{}



    const handleAllSpecies = ()=>{}





  return (
    <div>
      <label>Zoo Name</label>
      <br></br>
      <input onChange={handleInputChange} value={zoo.zooName}></input>
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} handleSpecies={handleSpecies}handleAllSpecies={handleAllSpecies}/>
      <Animals animals={zoo.animals}/>
    </div>
  );
}
