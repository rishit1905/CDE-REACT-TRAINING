import React from 'react';
import "./addproduct.css";

class AddProduct extends React.Component {
    state = {}
    render() {
        return (
            <div class="row">
                <form>
                    <fieldset>
                        <legend>ADD PRODUCT</legend>
                        <div class="columns">
                            <label for="fname">Details:</label>
                            <input type="text" id="fname" name="fname" /><br /><br />
                            <label for="fname">Details:</label>
                            <input type="text" id="fname" name="fname" /><br /><br />
                            <label for="fname">Details:</label>
                            <input type="text" id="fname" name="fname" /><br /><br />
                            <label for="fname">Details:</label>
                            <input type="text" id="fname" name="fname" /><br /><br />
                            <label for="fname">Details:</label>
                            <input type="text" id="fname" name="fname" /><br /><br />
                            <label for="fname">Details:</label>
                            <input type="text" id="fname" name="fname" /><br /><br />
                            <label for="fname">Details:</label>
                            <input type="text" id="fname" name="fname" /><br /><br />
                            <label for="fname">Details:</label>
                            <input type="text" id="fname" name="fname" /><br /><br />
                        </div>
                        <button>Add</button>
                    </fieldset>
                </form>
            </div>

        );
    }
}

export default AddProduct;