import React, { useReducer } from 'react';
import listReducer from './listReducer';
import listContext from './listContext';


const ListState = props => {
  
  const listState = [];

    const [ state, dispatch ] = useReducer(listReducer, listState);

    // Funciones
    const addToList = (id, homework, description, option) => {

        dispatch({
            type: option,
            payload: {
                id,
                homework, 
                description
            }
        });
    }

    const deleteList = (id, option) => {

        dispatch({
            type: option,
            payload: id
        });
    }

    const modifyList = (id, homework, description, option) => {

        dispatch({
            type: option,
            payload: {
                id,
                homework,
                description,
                culminado: 0
            }
        });
    }

    const validar = (id, homework, description, culminado, option) => {

        dispatch({
            type: option,
            payload: {
                id,
                homework,
                description,
                culminado
            }
        });
    }

    
    return (
        <listContext.Provider
            value={{
                completeList: state,
                addToList,
                deleteList,
                modifyList,
                validar
            }}
        > 
            {props.children}
        </listContext.Provider>
    )
}

export default ListState;