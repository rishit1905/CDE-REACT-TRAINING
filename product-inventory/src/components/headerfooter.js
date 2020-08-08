import React from 'react';
import "./headerfooter.css";
import { Link } from 'react-router-dom'
import HeaderContent from './headercontent';

class HeaderFooter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchValue: ""
        }
    }

    getSearch = (event) => {
        this.setState({ searchValue: event.target.value })
        this.props.history.push({
            pathname: "/search",
            state: { searchValue: event.target.value }
        })
    }

    render() {
        return (
            <div>
                <HeaderContent></HeaderContent>
                <footer>
                    <p>Copyright &copy; Rishabh</p>
                </footer>
            </div>

        );
    }
}

export default HeaderFooter;