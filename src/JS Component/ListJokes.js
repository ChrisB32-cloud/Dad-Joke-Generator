import React, { Component } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './ListJokes.css'

class ListJokes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scoreKeeper: 0
        }

        this.handleUpVote = this.handleUpVote.bind(this)
        this.handleDownVote = this.handleDownVote.bind(this)
    }

    handleUpVote() {
        //
        this.setState({
            scoreKeeper: this.state.scoreKeeper + 1
        })

    }

    handleDownVote() {
        //
        this.setState({
            scoreKeeper: this.state.scoreKeeper - 1
        })

    }


    render() {

        // console.log(this.props.jokeData);
        return (
            <div className='liCont' >
                {/* <h3>List Component</h3> */}
                <ul>
                    <div className='liBlock' >
                        <li className='liMark'><p>  <button onClick={this.handleUpVote} >
                            {/* <ArrowUpwardIcon /> */}
                            <i className="fas fa-arrow-up myUpArrowe"></i>
                        </button> {this.state.scoreKeeper} <button onClick={this.handleDownVote} >
                                {/* <ArrowDownwardIcon /> */}
                                <i className="fas fa-arrow-down myDownArrowe"></i>
                            </button> -  {''}{this.props.jokeData} </p></li>
                    </div>
                </ul>
            </div>
        );
    }
}

export default ListJokes;