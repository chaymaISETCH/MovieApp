
import React from "react";
import withLoading from "./HOC/withLoading"

import Search from "./Search"
import AddMovie from "./AddMovie"
import "./Rating.css"
import MovieCard from "./MovieCard";


export default class MovieList extends React.Component{
    
    movieList = this.props.data
    constructor(props){
        super(props)
        this.state={
            name:"",
            minRating:0,
            movieList:this.movieList
        }
    }

    addMovie=(movie)=>{
     
        this.movieList.push(movie)
        this.setState(state=>{
            return {movieList : this.movieList}
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