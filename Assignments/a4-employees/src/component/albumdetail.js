import React from 'react';

class AlbumDetail extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() { 
        return ( 
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.userId}</td>
                <td>{this.props.title}</td>
            </tr>
         );
    }
}
 
export default AlbumDetail;