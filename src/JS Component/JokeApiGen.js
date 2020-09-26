import React, { Component } from 'react';
import './JokeApiGen.css'
import axios from 'axios'
import ListJokes from './ListJokes';

class JokeApiGen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            jokes: []
        }

        this.handleClick = this.handleClick.bind(this)

    }

    async componentDidMount() {
        let i = 0
        let allJoke = []
        while (i < 10) {
            const responce = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } })
            i++
            // console.log(responce.data);
            allJoke.push(responce.data)

        }
        this.setState({
            jokes: allJoke
        })
    }

    async handleClick() {
        let i = 0
        while (i < 10) {
            // const responce = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } })
            i++
            // console.log(responce.data);
        }
    }



    render() {

        // console.log(this.state.jokes);
        // className='container'



        return (
            <div className='container' >
                <div className='jokeGenBox' >
                    <div className='jokeGenContentBtn' >
                        <h2>Joke Api Generator</h2>
                        <button onClick={this.handleClick} >New Joke</button>
                    </div>

                </div>
                <div className='jokeCont' >
                    {this.state.jokes.map(item => (
                        <ListJokes jokeData={item.joke} key={item.id} id={item.id} />
                    ))}
                    {/*  */}
                </div>
            </div>
        );
    }
}

export default JokeApiGen; 