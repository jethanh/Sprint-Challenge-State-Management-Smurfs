import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfList = props => {

    return(
        <div>
            <p>Click Button For Smurfs</p>
            <button onClick={() => props.getSmurfs()}>smurfs</button>
            {props.smurfs.map(smurf => (
                <div key={smurf.id}>
                    <h2>Name: {smurf.name}</h2>
                    <h2>Age: {smurf.age}</h2>
                    <h2>Height: {smurf.height}</h2>
                </div>
            ))}
        </div>

    )


}





const mapStateToProps = state => {

    return{
    
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error

}
    

}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);