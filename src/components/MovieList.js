import React from "react";
import Search from "./Search"
import AddMovie from "./AddMovie"
import "./Rating.css"
import MovieCard from "./MovieCard";
const movieList=[
    {   name: "Secretly Greatly",
        year:2013,
        rating:5,
        img:"/images/220px-Secretly_Greatly_poster.jpg"
    },
    {   name: "My friend is still alive",
        year:2013,
        rating:3,
        img:"/images/My_Friend_is_Still_Alive.jpg"
    },
    {   name: "John tucker must die",
        year:2006,
        rating:2,
        img:"/images/french-stream.fr.jpeg"
    },
    {   name: "Beauty and the beast",
        year:1991,
        rating:5,
        img:"/images/ob_02e072_la-belle-et-la-bete.jpg"
    }]

export default class MovieList extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            name:"",
            minRating:0,
            movieList:movieList
        }
    }

    addMovie=(movie)=>{
     
        movieList.push(movie)
        this.setState(state=>{
            return {movieList : movieList}
        })
    }
    

    search=(searched)=>{
        this.setState({
            name: searched
        })
    }

    handleRating = (value) => {
        this.setState({
            minRating: value
        })
    }

    render(){
        return (
            <div>
                <Search search={this.search} getRating={this.handleRating} stars={this.state.minRating}/>
                <div className="container">
                    {console.log(this.state)}
                    {this.state.movieList
                        .filter(el => el.rating >= this.state.minRating && el.name.toUpperCase().match(this.state.name.toUpperCase()))
                        .map((el,i)=><MovieCard movie={el} key={i} />)}  
             
                <AddMovie addMovie={this.addMovie}/>
            </div>
        </div>
    );
}}