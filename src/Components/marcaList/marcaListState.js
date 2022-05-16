import React, { useReducer } from 'react';
import marcaListReducer from './marcaListReducer';
import marcaListContext from './marcaListContext';


const MarcaListState = props => {
  
  const marcaListState = {
        updateId: null
    }

    const [ state, dispatch ] = useReducer(marcaListReducer, marcaListState);

    // Funciones
    const marcaList = (id, homework, description, option) => { 

        dispatch({
            type: option,
            payload: {
                id, 
                homework, 
                description
            }
        });
    }

    const desmarcarList = (vacio, option) => { 

        dispatch({
            type: option,
            payload: vacio
        });
    }
    
    return (
        <marcaListContext.Provider
            value={{
                updateIdList: state.updateId,
                marcaList,
                desmarcarList
            }}
        > 
            {props.children}
        </marcaListContext.Provider>
    )
}

export default MarcaListState;