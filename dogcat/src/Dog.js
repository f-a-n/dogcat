//this is a template folder for you to move into your src folder after you created a boilerplate
import React, { useState, useEffect } from "react";

//Starting code for if your group Chose FUNCTION COMPONENTS
export const Dog = () => {
    const [animal, setAnimal] =useState('dog');
    const changeAnimal = () => {
      const newAnimal = animal === "dog" ? "cat" : "dog";
      console.log(newAnimal)
      setAnimal(newAnimal);
    }  
  return (
    <div>
      <img
        alt="dog"
        src={animal === "dog" ? "https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg" :
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg"}></img>
      <button onClick={changeAnimal}>I'm more of a {animal === "dog" ? "cat" : "dog"} person!</button>      
    </div>
  );
};
