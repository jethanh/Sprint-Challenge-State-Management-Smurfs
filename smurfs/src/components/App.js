import React, { Component } from "react";
import "./App.css";
import SmurfList from "../components/SmurfList"
import SmurfForm from "./SmurfForm";
import { addSmurf } from '../actions/'
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList/>
        <SmurfForm addSmurf = {this.props.addSmurf}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, { addSmurf })(App);
