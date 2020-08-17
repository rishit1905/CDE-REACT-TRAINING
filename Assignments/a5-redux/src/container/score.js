import React from 'react';
import { bindActionCreators } from 'redux';
import{connect} from 'react-redux'
import addScore from '../action/addscore';

class Score extends React.Component {
    constructor(props){
        super(props)
        this.state={
            score:0
        }
    }
    getscore=(event)=>{
        this.setState({score:event.target.value})
    }
    render() { 
        return ( 
            <div>
                <label>Score:</label>
                <input type="number" onChange={this.getscore}></input>
                <button onClick={()=>{this.props.scoreAdd(this.state.score)}}>Add</button>
            </div>
         );
    }
}
function eventDispatch(dispatch){
    return bindActionCreators({scoreAdd:addScore},dispatch)
}

export default connect(null,eventDispatch)(Score);