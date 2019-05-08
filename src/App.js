import React from 'react';
import "./App.css"
import MovieList from "./components/MovieList" 
import withLoading from "./components/HOC/withLoading"

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


export default class extends React.Component{
constructor(props)
{
  super(props)
  this.state={
    isLoading:true
  }
}


componentDidMount(){
  setTimeout(() => {
    this.setState({
      isLoading:false,
      movieList:movieList
    })
  }, 5000);


}

render(){
  const Wrapped = withLoading(MovieList)
  return (
    <div>
      <Wrapped isLoading={this.state.isLoading} data={this.state.movieList} />
    </div>
  );}
}

