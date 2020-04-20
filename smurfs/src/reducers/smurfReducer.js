import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL,
    NEW_SMURF_INCOMING,
    SMURF_ADDED
} from "../actions"

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    error: ""
}

const reducer = (state = initialState, action) => {

    switch (action.type){
        case FETCH_SMURFS_START:
            return{
                ...state,
                fetchingSmurfs: true,
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                fetchingSmurfs: false,
                smurfs: action.payload,
                error: ""
            }
        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            }
        case NEW_SMURF_INCOMING:
            return{
                ...state,
                fetchingSmurfs: true,
                error: ""
            };
        case SMURF_ADDED:
            return{
                ...state,
                fetchingSmurfs: false,
                error: "",
                smurfs: action.payload
            }
        default: 
            return state;
        }

}
            
     

export default reducer;