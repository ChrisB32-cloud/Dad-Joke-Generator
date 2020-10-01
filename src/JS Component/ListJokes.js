import React, { Component } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './ListJokes.css'

class ListJokes extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     // scoreKeeper: 0
        //     passedJokes: [
        //         {
        //             id: this.props.id,
        //             theJoke: this.props.jokeData,
        //             // theKey: this.props.key,
        //             index: this.props.index,
        //             scoreKeeper: 0
        //         }
        //     ]
        // }

        this.handleUpVote = this.handleUpVote.bind(this)
        this.handleDownVote = this.handleDownVote.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        //
    }

    handleUpVote() {
        //
        // this.setState({
        //     scoreKeeper: this.state.scoreKeeper + 1
        // })

        // this.setState({
        //     passedJokes: [
        //         {
        //             id: this.state.passedJokes[0].id,
        //             theJoke: this.state.passedJokes[0].theJoke,
        //             // theKey: this.props.key,
        //             index: this.state.passedJokes[0].index,
        //             scoreKeeper: this.state.passedJokes[0].scoreKeeper + 1
        //         }
        //     ]
        // })

        this.props.voteUp(this.props.id, 1)

    }

    handleDownVote() {
        //     //
        //     // this.setState({
        //     //     scoreKeeper: this.state.scoreKeeper - 1
        //     // })

        //     this.setState({
        //         passedJokes: [
        //             {
        //                 id: this.state.passedJokes[0].id,
        //                 theJoke: this.state.passedJokes[0].theJoke,
        //                 // theKey: this.props.key,
        //                 index: this.state.passedJokes[0].index,
        //                 scoreKeeper: this.state.passedJokes[0].scoreKeeper - 1
        //             }
        //         ]
        //     })

        this.props.downVote(this.props.id, -1)
    }

    handleChange(e) {
        // this.props.jokeSort(this.state.passedJokes)
    }


    render() {
        // this.props.jokeSort(this.state)
        // console.log(this.props.jokeData);
        return (
            // <div className='liCont' >
            //     {/* <h3>List Component</h3> */}
            //     <ul>
            //         <div className='liBlock' >
            //             <li className='liMark' onChange={this.handleChange} ><p>  <button onClick={this.handleUpVote} >
            //                 {/* <ArrowUpwardIcon /> */}
            //                 <i className="fas fa-arrow-up myUpArrowe"></i>
            //             </button> {this.state.passedJokes[0].scoreKeeper} <button onClick={this.handleDownVote} >
            //                     {/* <ArrowDownwardIcon /> */}
            //                     <i className="fas fa-arrow-down myDownArrowe"></i>
            //                 </button> -  {''}{this.state.passedJokes[0].theJoke} </p></li>
            //             <hr className='solid-line' />
            //         </div>
            //     </ul>
            // </div>
            <div className='liCont' >
                {/* <h3>List Component</h3> */}
                <ul>
                    <div className='liBlock' >
                        <li className='liMark' onChange={this.handleChange} ><p>  <button onClick={this.handleUpVote} >
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