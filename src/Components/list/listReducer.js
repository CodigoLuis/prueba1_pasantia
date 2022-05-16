const listReducer = (state, action) => {
    switch(action.type) {
        case "add":
                return [...state, {id: action.payload.id, homework: action.payload.homework, description: action.payload.description, culminado: 0} ]

            // if (action.payload.id == 0 && action.payload.homework ==! "") {
            //     return [ {id: action.payload.id, homework: action.payload.homework, description: action.payload.description, culminado: 0} ]
            // } else {
            // }


        break
        
        case "delete":
            
            return state.filter(list => list.id !== action.payload)
        break
            
        case "update":
            
            return state.map(list => list.id === action.payload.id ? action.payload : list)
        break
            
        case "validar":
            
           return state.map(list => list.id === action.payload.id ? action.payload : list)
           
        break
            
        default: 
            return state;
    }
}

export default listReducer;