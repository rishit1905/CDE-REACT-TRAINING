import React from 'react';
import { connect } from 'react-redux';

class Details extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <h3>{this.props.fname}{this.props.lname}-{this.props.score}</h3>
            </div>
        );
    }
}

function storeToProps(store){
    return{
        fname:store.addFirstName,
        lname:store.addLastName,
        score:store.addScore
    }
}

export default connect(storeToProps)(Details);