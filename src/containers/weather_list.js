import React, { Component } from 'react';
import { connect } from 'net';

class WeatherList extends Component {
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