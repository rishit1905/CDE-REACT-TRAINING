import React from 'react';
import axios from 'axios';
import AlbumDetail from './albumdetail'
class Lifecycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           albums: []
        }
    }

    componentWillMount() {
        this.getAllAlbums()
    }

    componentDidMount() {
        console.log(this.props)
    }

    getAllAlbums = () => {
        axios.get("https://jsonplaceholder.typicode.com/albums")
            .then(response => {
                console.log(response)
                console.log(response.data)
                this.setState({ albums: response.data })
                console.log(this.state.albums)
            }, error => {
                console.log(error)
            })
    }

    renderAllAlbums = () => {
        return this.state.albums.map(album => {
            return (
                <AlbumDetail
                    key={album.id}
                    id={album.id}
                    userId={album.userId}
                    title={album.title}
                >
                </AlbumDetail>
            )
        })
    }

    render() {
        return (
            <div>
                <div>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>USER ID</th>
                                <th>TITLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderAllAlbums()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Lifecycle;