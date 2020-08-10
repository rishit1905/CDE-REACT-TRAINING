import React from 'react';
import "./headerfooter.css";
import HeaderContent from './headercontent';

class HeaderFooter extends React.Component {

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