import React, { Component } from 'react';
import './ListJokes.css'

class ListJokes extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {

        // console.log(this.props.jokeData);
        return (
            <div>
                {/* <h3>List Component</h3> */}
                <ul>
                    <li><p> {this.props.jokeData} </p></li>
                </ul>
            </div>
        );
    }
}

export default ListJokes;