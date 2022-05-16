import React, {useContext} from 'react';
import '../Styles/sampleForm.css';
import RowOfConten from './Molecules/RowOfConten';
import ListContext from './list/listContext';


const SampleForm = () => {

  const listContext = useContext(ListContext);
  const { completeList, addToList } = listContext;


  return ( 
  	  
  	<div className="sampleForm">
  	 
      <ul className="sampleRowOfSlopes">
        { completeList.map( c => c.culminado === 0 ? (
                 <RowOfConten 
                    id={c.id} 
                    homework={c.homework}  
                    description={c.description} 
                    culminado={0}
                 /> 
              )
              : null
            )
          }
      </ul>

      <ul className="sampleCulminationRow">
        
        { completeList.map( c => ( c.culminado === 1 ? 
                 <RowOfConten 
                    id={c.id} 
                    homework={c.homework}  
                    description={c.description} 
                    culminado={c.culminado} 
                 /> 
              : null  
              )
            )
        }

      </ul>

  	</div>

  );
}

export default SampleForm;