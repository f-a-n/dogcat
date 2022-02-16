
import './App.css';
import React, { useState } from 'react';

// this is where we put our starting code for the function
function Dog() {
    const [animal, setAnimal] = useState("Dog");

    function changeAnimal(){
        console.log("You clicked me!")
    }

    const dog_pic = "https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg";
    const cat_pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg";

    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg"></img>
            {/* <button>I'm more of a dog person!</button> */}
            <button onClick={changeAnimal}>I'm more of a dog person! </button>
        </div>
    );
}

export default Dog;


