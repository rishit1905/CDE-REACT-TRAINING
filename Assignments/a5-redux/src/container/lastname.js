import React from 'react';
import { bindActionCreators } from 'redux';
import{connect} from 'react-redux'
import addLastName from '../action/addlastname';

class LastName extends React.Component {
    constructor(props){
        super(props)
        this.state={
            lastname:""
        }
    }
    getlastname=(event)=>{
        this.setState({lastname:event.target.value})
    }
    render() { 
        return ( 
            <div>
                <label>Last Name:</label>
                <input type='text' onChange={this.getlastname}></input>
                <button onClick={()=>{this.props.lastNameAdd(this.state.lastname)}}>Add</button>
            </div>
         );
    }
}
function eventDispatch(dispatch){
    return bindActionCreators({lastNameAdd:addLastName},dispatch)
}
export default connect(null,eventDispatch)(LastName);