import React from 'react';
import '../Styles/app.css';
import RegistrationForm from './RegistrationForm';
import SampleForm from './SampleForm';

/*importo ListState que es donde guardare la lista*/
import ListState from './list/listState';
/*importo MarcaListState que es donde guardare la tarea a Modificar*/
import MarcaListState from './marcaList/marcaListState';


const App = () => {

  return ( 

	<div className="app">  	
	  	<div>
  	 		<ListState>
	  	 		<MarcaListState>
			  		<RegistrationForm />
			  		<SampleForm />
		 		</MarcaListState>
	 		</ListState>
	  	</div>
	</div>

  );
}

export default App;