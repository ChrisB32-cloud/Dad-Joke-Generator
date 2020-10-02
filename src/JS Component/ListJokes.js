import React, { Component } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './ListJokes.css'

class ListJokes extends Component {
    constructor(props) {
        super(props)

        this.handleUpVote = this.handleUpVote.bind(this)
        this.handleDownVote = this.handleDownVote.bind(this)

    }



    handleUpVote() {
        this.props.voteUp(this.props.id, 1)
        this.props.jokeSort()
    }

    handleDownVote() {
        this.props.downVote(this.props.id, -1)
        this.props.jokeSort()
    }

    render() {
        // this.props.jokeSort(this.state)
        // console.log(this.props.jokeData);
        return (

            <div className='liCont' >
                <ul>
                    <div className='liBlock' >
                        <li className='liMark'  ><p>  <button onClick={this.handleUpVote} >
                            {/* <ArrowUpwardIcon /> */}
                            <i className="fas fa-arrow-up myUpArrowe"></i>
                        </button> {this.props.score} <button onClick={this.handleDownVote} >
                                {/* <ArrowDownwardIcon /> */}
                                <i className="fas fa-arrow-down myDownArrowe"></i>
                            </button> -  {''}{this.props.jokeData} </p></li>
                        <hr className='solid-line' />
                    </div>
                </ul>
            </div>
        );
    }
}

export default ListJokes;