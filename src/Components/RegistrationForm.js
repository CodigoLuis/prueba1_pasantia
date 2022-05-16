import React, { useState, useContext, useEffect } from 'react';

import '../Styles/registrationForm.css'; 

import ListContext from './list/listContext';
import MarcaListContext from './marcaList/marcaListContext';

const RegistrationForm = () => {


  const [ inputState, inputToAssign ] = useState({
     homework: "",
     description: "",
     primId: "" 
  })

  const listContext = useContext(ListContext);
  const { completeList, addToList, modifyList } = listContext;

  const marcaListContext = useContext(MarcaListContext);
  const { updateIdList, marcaList, desmarcarList } = marcaListContext;

  const { 
      homework,  
      description,
      primId
    } = inputState;

  /*Con esta funcion obtengo el contenido del input y el textarea*/
  const heardTyped = (e) => {

    if (e.target.id === "homework") {
      inputToAssign({
        ...inputState,
        [e.target.name]: e.target.value
      })
    }

    if (e.target.id === "description") {
      inputToAssign({
        ...inputState,
        [e.target.name]: e.target.value
      })
    }

  }

  /*Con esta funcion añado tarea a la lista o modifico el contenido de una tarea*/
  const addToTheList = () => {

    let id = Date.now();

    if (inputState.homework === "" || inputState.description === "") {
        alert("Todos los campos deben estar llenados");

    } else if (inputState.primId != "" && inputState.homework != "" && inputState.description != "") {

      modifyList(inputState.primId, inputState.homework, inputState.description, 'update');

      limpiar()

    } else {
      
      addToList(id, inputState.homework, inputState.description, 'add');

     limpiar()

    }

  }

  const limpiar = () => {

    inputToAssign({
          homework: "",
          description: "",
          primId: ""
      })
  }


  /*Con esta funcion indico la tarea a modificar */
  useEffect( () => {

    if (updateIdList === null) {} else {

      inputToAssign({
          homework: updateIdList.homework,
          description: updateIdList.description,
          primId: updateIdList.id
      })

      desmarcarList(null, "delete")
    }
    
  }, [updateIdList])
  

  return (  
  	  
  	<div className="registrationForm">

    		<h1>Formulario de Tareas</h1>
    		
    		<div className="boxInput">	
    			<input 
    				type="text"
            id="homework"
            name="homework"
    				placeholder="Escribe la tarea..."
            value={homework}
            onChange={heardTyped} 
    			/>
    		</div>

  		<div className="boxTextarea">
  			<textarea 
  				name="description" 
  				id="description" 
  				placeholder="Descripción"
          value={description}
          onChange={heardTyped}
  			>

  			</textarea>

    		</div>

        <div className="boxOfButton">

          <input
            type="button" 
            value="Agregar" 
            id="add" 
            name="add"
            className="agregar"
            onClick={addToTheList} 
            />


         { inputState.primId === "" ? null 
          : <input
            type="button" 
            value="Canselar" 
            id="canselar" 
            name="canselar"
            className="canselar"
            onClick={limpiar} 
            />
          }
        </div>

    </div>

  );
}

export default RegistrationForm;