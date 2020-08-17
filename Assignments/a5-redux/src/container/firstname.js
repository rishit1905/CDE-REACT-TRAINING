import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addFirstName from '../action/addfirstnname';

class FirstName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname:""
        }
    }

    getFirstName=(event)=>{
        this.setState({firstname:event.target.value})
    }
    render() {
        return ( 
        <div>
            <label>First Name:</label>
            <input type="text" onChange={this.getFirstName}></input>
            <button onClick={()=>{this.props.firstNameAdd(this.state.firstname)}}>Add</button>
        </div> );
    }
}

function eventDispatch(dispatch){
    return bindActionCreators({firstNameAdd:addFirstName}, dispatch)
}

export default connect(null,eventDispatch)(FirstName);
