import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props){
        super(props);

        // Initialize state inside constructor
        this.state = {
            term: ''
        }

        // Take existing function; bind it to this; and replace existing function
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    // All DOM event handlers come along with event object
    onInputChange(event){
        // Set state every time the user enters text into search
        // The value of this will not be the React component so method of setState will not be defined
        // Can be fixed by using () => this.onInputChange OR bind the context of onInputChange
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event){
        // Do not submit form on carriage return
        event.preventDefault();

        // Call action creator and fetch weather data
        this.props.fetchWeather(this.state.term);
        // Set state term to empty string to cause component to rerender and clear out search input
        this.setState({ term: '' });
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
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

// Hook up the action creator fetchWeather to SearchBar container
function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);