import React, { Component } from 'react';
import { connect } from 'net';

class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        // Pull off an array of temperatures
        // Map over the list of all the different forecasts for each city
        // Inside of map pass a function; All items inside list array will be passed to this function as the argument weather
        const temps = cityData.list.map(weather => weather.main.temp); // Returns the temperature for each row inside list

        <tr key={name}>
            <td>{name}</td>
        </tr>
    }

    // this.props.weather is the array of objects (cities)
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){ // ES6 syntax for pulling off weather property from the argument
    // state.weather since weather reducer is assigned to weather key in combine reducers
    //   return { weather: weather } // state.weather if argument is (state)
    return { weather } // ES6 syntax for same key and value
}

// Connect component with function mapStateToProps
export default connect(mapStateToProps)(WeatherList);