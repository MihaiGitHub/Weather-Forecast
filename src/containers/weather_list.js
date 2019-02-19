import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData){
         const name = cityData.city.name;
        // Pull off an array of temperatures
        // Map over the list of all the different forecasts for each city
        // Inside of map pass a function; All items inside list array will be passed to this function as the argument weather
        const temps = cityData.list.map(weather => weather.main.temp); // Returns the temperature for each row inside list

        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        // Destructure lon and lat and create variables lon and lat
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="K" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    // this.props.weather is the array of objects (cities)
    render() {
        console.log('this.props ',this.props)
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
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