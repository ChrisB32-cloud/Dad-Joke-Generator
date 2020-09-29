import React, { Component } from 'react';
import './JokeApiGen.css'
import axios from 'axios'
import ListJokes from './ListJokes';
const API_URL = "https://icanhazdadjoke.com/"
const format_API = { headers: { Accept: "application/json" } }

class JokeApiGen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            jokes: [],
            // scoreKeeper: 0

        }

        this.handleClick = this.handleClick.bind(this)
        this.fetchAPI = this.fetchAPI.bind(this)
        // this.checkId = this.checkId.bind(this)

    }

    async fetchAPI() {
        const things = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } })
        // console.log(things.data);
        return things.data
    }

    async componentDidMount() {

        let i = 0
        let allJoke = []
        while (i < 20) {

            let responce = await this.fetchAPI()
            // responce.push({ scoreNum: 0 })
            i++

            allJoke.push(responce)

        }


        this.setState({
            jokes: allJoke
        })

    }

    async handleClick() {
        let i = 0
        let moreJokes = []
        while (i < 10) {
            const responce = await this.fetchAPI()
            i++

            // console.log(responce.data.id);
            moreJokes.push(responce)
        }

        this.setState({
            jokes: [...this.state.jokes, moreJokes.flat()].flat()
        })

    }



    render() {

        // this.fetchAPI()

        // console.log(fetchApi());
        console.log(this.state.jokes);
        // console.log(this.state.callMoreJokes);
        // className='container'



        return (
            <div className='container' >
                <div className='jokeGenBox' >
                    <div className='jokeGenContentSec' >
                        <h2>Dad Joke Api <br /> Generator</h2>
                        <button className='joke-btn' onClick={this.handleClick} >New Joke</button>
                    </div>

                </div>
                <div className="liCont" >
                    <div className='jokeCont' >
                        {this.state.jokes.map((item, idx) => (
                            <ListJokes
                                index={idx}
                                jokeData={item.joke}
                                key={item.id}
                                id={item.id} />
                        ))}
                        {/*  */}
                    </div>
                </div>
            </div>
        );
    }
}

export default JokeApiGen; 