import React from "react";
import "./AddMovie.css"


export default class AddMovie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            name: "",
            rating: 0,
            img: "",
            year: 0
        }
    }

 
   handleChange=(e) => { this.setState({ [e.target.name]: e.target.value }) }
    add=() => {

        if (this.state.name !== "" && this.state.year !== "" && this.state.img !== "") {
            console.log("ok", this.state)

            this.props.addMovie(this.state)
            this.setState({ show: false })
        }

        else alert("you must fill all fields")
    }
    show = () => {
        this.setState({ show: !this.state.show,    
        name: "",
        rating: 0,
        img: "",
        year: 0 })
    }
    render() {
        return (
            <div>
                <div className="card plus">
                    <button onClick={this.show}>+</button>
                </div>
                <div className="addContainer" style={{ display: this.state.show ? "block" : "none" }} >
                    <div className="subContainer">
                        <button onClick={this.show} className="close">x</button>

                        Name :
                            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                        Year :
                            <input type="text" name="year" onChange={this.handleChange} value={this.state.year} />
                        Rate :
                            <input type="number" name="rating" onChange={this.handleChange} value={this.state.rat} />
                        Image :
                            <input type="text" name="img" onChange={this.handleChange} value={this.state.img} />
                        <button className="add" onClick={this.add}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}