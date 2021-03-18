import { GET_STATIONS, RadioState, RadioActionTypes } from './radioTypes';
import {
  TOGGLE_STATIONS_LOADING,
  SET_STATION,
  SET_CURRENT_STATION,
} from './radioTypes';
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
        currentStationIndex: action.payload,
      };
    case SET_CURRENT_STATION:
      return {
        ...state,
        currentStation: action.payload,
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
