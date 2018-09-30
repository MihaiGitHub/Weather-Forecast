import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props){
        super(props);

        // Initialize state inside constructor
        this.state = {
            term: ''
        }

        // Take existing function; bind it to this; and replace existing function
        this.onInputChange = this.onInputChange.bind(this);
    }

    // All DOM event handlers come along with event object
    onInputChange(event){
        // Set state every time the user enters text into search
        // The value of this will not be the React component so method of setState will not be defined
        // Can be fixed by using () => this.onInputChange OR bind the context of onInputChange
        this.setState({ term: event.target.value });
    }

    render(){
        return (
            <form className="input-group">
                <input 
                    placeholder="Get a 5-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}