const initialData={
    movies:[],
    series:[]
}

const moviesReducer =(state= initialData,action) => {
    switch(action.type){
        case "LOAD_MOVIES":
            return{
                ...state, movies: action.payload
            }
            case "LOAD_SERIES":
                return{
                    ...state,series:action.payload
                }
        default:
            return state
    }
}

export default moviesReducer