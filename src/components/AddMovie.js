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

    add=() => {

        if (this.state.name !== "" && this.state.year !== "" && this.state.img !== "") {
            console.log("ok", this.state)

            this.props.addMovie(this.state)
            this.setState({ show: false })
        }

        else alert("you must fill all fields")
    }
    show = () => {
        this.setState({ show: !this.state.show })
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
                            <input type="text" onChange={(e) => { this.setState({ name: e.target.value }) }} value={this.state.name} />
                        Year :
                            <input type="text" onChange={(e) => { this.setState({ year: e.target.value }) }} value={this.state.year} />
                        Rate :
                            <input type="number" onChange={(e) => { this.setState({ rating: e.target.value }) }} value={this.state.rate} />
                        Image :
                            <input type="text" onChange={(e) => { this.setState({ img: e.target.value }) }} value={this.state.img} />
                        <button className="add" onClick={this.add}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}