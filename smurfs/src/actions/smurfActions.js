//http://localhost:3333/smurfs
import axios from "axios";
export const FETCH_SMURFS_START = "FETCH_SMURFS_START"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL"
export const NEW_SMURF_INCOMING = "NEW_SMURF_INCOMING"
export const SMURF_ADDED = "SMURF_ADDED"

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START })
    axios.get("http://localhost:3333/smurfs")
        .then(res => { 
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURFS_FAIL, payload: err.res })
        })
}

export const addSmurf = smurf => {
    return dispatch => {
        dispatch({ type: NEW_SMURF_INCOMING });
        axios.post('http://localhost:3333/smurfs', smurf)
            .then(res => {
                dispatch({ type: SMURF_ADDED, payload: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
}