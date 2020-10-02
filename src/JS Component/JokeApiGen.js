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

        }

        this.handleClick = this.handleClick.bind(this)
        this.fetchAPI = this.fetchAPI.bind(this)
        this.handleScore = this.handleScore.bind(this)
        this.sortJokes = this.sortJokes.bind(this)
        this.getJokes = this.getJokes.bind(this)
        this.storedJoke = this.storedJoke.bind(this)


    }

    async fetchAPI() {
        const things = await axios.get("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } })
        // console.log(things.data);
        return things.data
    }

    async getJokes() {
        let i = 0
        let allJoke = []
        while (i < 10) {

            let responce = await this.fetchAPI()
            i++

            allJoke.push({ id: responce.id, joke: responce.joke, scores: 0 })


        }

        // this.setState({
        //     jokes: allJoke
        // })

        this.setState(st => ({
            jokes: [...st.jokes, allJoke].flat()
        }))

    }

    componentDidMount() {

        let fetchlocalstorage = localStorage.getItem('theJokes')
        // console.log('localStorage', JSON.parse(fetchlocalstorage));
        let hightScoreJoke = JSON.parse(fetchlocalstorage)

        if (hightScoreJoke === null) {
            this.getJokes()
        } else {
            this.setState({
                jokes: hightScoreJoke
            })
        }

    }

    async handleClick() {
        this.getJokes()

    }

    storedJoke() {
        localStorage.setItem('theJokes', JSON.stringify(this.state.jokes))
    }



    sortJokes() {
        this.setState(st => ({
            jokes: st.jokes.sort((a, b) => {
                return b.scores - a.scores
            })
        }))

        // localStorage.setItem('theJokes', JSON.stringify(this.state.jokes))
        this.storedJoke()
    }

    handleScore(idx, alpha) {


        this.setState(st => ({
            jokes: st.jokes.map(jok =>
                jok.id === idx ? { ...jok, scores: jok.scores + alpha } : jok
            )
        }))


    }

    render() {
        // console.log(fetchApi());
        // console.log(this.state.jokes);

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
                                id={item.id}
                                score={item.scores}
                                voteUp={this.handleScore}
                                downVote={this.handleScore}
                                jokeSort={this.sortJokes}
                            />

                        ))}
                        {/*  */}
                    </div>
                </div>
            </div>
        );
    }
}

export default JokeApiGen;


// let i = 0
        // let allJoke = []
        // while (i < 25) {

        //     let responce = await this.fetchAPI()
        //     i++
        //     // allJoke.push({ jokes: responce, scores: 0 })
        //     allJoke.push({ id: responce.id, joke: responce.joke, scores: 0 })

        // }


        // this.setState({
        //     jokes: allJoke
        // })

        // let i = 0
        // let moreJokes = []
        // while (i < 10) {
        //     const responce = await this.fetchAPI()
        //     i++

        //     // console.log(responce.data.id);
        //     moreJokes.push(responce)
        // }

        // this.setState({
        //     jokes: [...this.state.jokes, moreJokes.flat()].flat()
        // })


        // const testing = this.state.jokes.filter((e, i, a) => a.id.indexOf(e.id) !== i)
        // console.log(testing);

        // let unique = this.state.jokes.filter((set => f => !set.has(f.id) && set.add(f.id))(new Set));

        // console.log(unique);