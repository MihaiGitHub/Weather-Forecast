import { FETCH_WEATHER } from '../actions/index';

// New reducer for handling fetch weather action
export default function(state = [], action){
    switch (action.type){
        case FETCH_WEATHER:
            // Update state with cities; Take all entries inside state and insert into new array along with action.payload.data
            return [ action.payload.data, ...state ]; // New array will be [ city, city, city ]
            
    }

    return state;
}