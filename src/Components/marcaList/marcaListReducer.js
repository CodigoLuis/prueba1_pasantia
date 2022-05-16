const marcaListReducer = (state, action) => {
    switch(action.type) {
        case "add":
            return {
                updateId: action.payload
            }
        break
        
        case "delete":
            return {
                updateId: action.payload
            }
        break
            
        default: 
            return state;
    }
}

export default marcaListReducer;