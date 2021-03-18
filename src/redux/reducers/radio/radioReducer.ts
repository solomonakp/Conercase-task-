import { GET_STATIONS, RadioState, RadioActionTypes } from './radioTypes';
import { TOGGLE_STATIONS_LOADING, SET_STATION } from './radioTypes';

const initialState: RadioState = {
  isLoading: true,
  currentStation: null,
  currentStationIndex: null,
  stations: [],
  stationLoading: false,
};

const radioReducer = (
  state = initialState,
  action: RadioActionTypes
): RadioState => {
  switch (action.type) {
    case TOGGLE_STATIONS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case SET_STATION:
      return {
        ...state,
        currentStationIndex:
          state.currentStationIndex === action.payload ? null : action.payload,
        currentStation:
          state.currentStation === state.stations[action.payload].station
            ? null
            : state.stations[action.payload].station,
      };
    case GET_STATIONS:
      return {
        ...state,
        stations: action.payload,
      };

    default:
      return state;
  }
};

export default radioReducer;
