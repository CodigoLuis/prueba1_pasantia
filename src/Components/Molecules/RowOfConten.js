import React, { useContext } from 'react';
import '../../Styles/rowOfConten.css';

import ListContext from '../list/listContext';
import MarcaListContext from '../marcaList/marcaListContext';

const RowOfConten = ({ id, homework, description, culminado }) => { 

  const listContext = useContext(ListContext);
  const { completeList, deleteList, modifyList, validar } = listContext;

  const marcaListContext = useContext(MarcaListContext);
  const { updateIdList, marcaList } = marcaListContext;

  return ( 
  	  
  	<li id={id} className="rowOfConten">
  	   
      <div className="content">
        <h3>{homework}</h3>
        <p>{description}</p>
      </div>

      <div className="options">
        
       {culminado == 0 ? <input 
          type="button" 
          name="listo" 
          id="listo" 
          className="listo" 
          value="Listo" 
          onClick={() => validar( id, homework, description, 1, "validar" ) } />

          : null
        }
        <input 
          type="button" 
          name="eliminar" 
          id="eliminar" 
          className={culminado == 0 ? "eliminar" : "eliminar1"} 
          value="Eliminar" 
          onClick={() => deleteList( id, "delete") } />
        
        {culminado == 0 ? <input 
          type="button" 
          name="editar" 
          id="editar" 
          className="editar" 
          value="Editar" 
          onClick={() => marcaList( id, homework, description, "add") } />
          : null
        }
      </div>

  	</li>

  );
}

export default RowOfConten;