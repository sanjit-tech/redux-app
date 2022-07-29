import React, {Component, Fragment} from 'react'
import axios from 'axios'

class ToDo extends Component{

     constructor(props){
         super(props)
         this.state = {
            input_text: ''
         }
     }


     render() {
         const {input_text} = this.state
         return(
             <Fragment>
             <h2>Assignment Search</h2>
                 <div className="input-group mt-5">
                 <input type="text" className="form-control" placeholder="Enter Text" name="input_text" value={input_text}
                 // onChange={(e)=> this.handleOnchange(e)}
                 />
                     <button className="btn btn-primary">Search</button>
                 </div>

             </Fragment>
         )
     }
}
export default ToDo