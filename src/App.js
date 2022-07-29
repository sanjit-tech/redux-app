import React, {useState} from 'react'
import "./App.css"
import {useSelector, useDispatch} from 'react-redux'
import {decNumber, incNumber} from "./action";
import ToDo from "./components/Home";
function App() {
    const myState = useSelector((state) => state.changeNumber)
    const dispatch = useDispatch()
  return (
    <div className="App container">
        <div className="row">


        <div className="mb-3 mt-5 col-sm-4 m-auto">
      <h1 className="text-center mt-5">Increment Decrement</h1>
      <h4 className="text-center mt-5">Using Redux</h4>
        <div className="input-group mb-3 mt-5 col-sm-3">
            <span className="input-group-text" id="basic-addon1" onClick={()=> dispatch(decNumber())}>-</span>
            <input type="text" className="form-control text-center" placeholder="Number" aria-label="Username"
                   aria-describedby="basic-addon1" value={myState}/>
            <span className="input-group-text" id="basic-addon1" onClick={()=> dispatch(incNumber())}>+</span>
        </div>
        </div>
        </div>
    </div>
  );
}

export default App;
