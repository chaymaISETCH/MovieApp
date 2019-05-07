import React from "react";
import Rating from './Rating'
import "./MovieCard.css"

const MovieCard=(props)=>{
  return (
    <div className="card">
      <img alt={props.movie.name} src={props.movie.img} />
        <div className="textContainer" style={{top:0}}>
            <Rating stars={props.movie.rating} getRating={() => {}}/>
        </div>
      <div className="textContainer">
        <h4>{props.movie.name} - {props.movie.year}</h4> 
      </div>
    </div>
  );
}
export default MovieCard