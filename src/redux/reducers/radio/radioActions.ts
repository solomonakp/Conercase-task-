import {
  TOGGLE_STATIONS_LOADING,
  SET_STATION,
  RadioActionTypes,
} from './radioTypes';
import { RootState } from '../index';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_STATIONS, SET_CURRENT_STATION } from './radioTypes';
import { stations } from '../../../stationsObject';

export type Dispatch = ThunkDispatch<RootState, void, Action>;
export type GetState = () => RootState;

export const toggleStationsLoading = (): RadioActionTypes => {
  return {
    type: TOGGLE_STATIONS_LOADING,
  };
};

export const toggleStation = (index: number) => (
  dispatch: Dispatch,
  getState: GetState
) => {
  const {
    radio: { currentStationIndex, stations },
  } = getState();
  const stationIndex = currentStationIndex === (null || index) ? null : index;

  const station = stations[index].station;

  dispatch({ type: SET_STATION, payload: stationIndex });

  dispatch({ type: SET_CURRENT_STATION, payload: station });
};

export const getStations = () => (dispatch: Dispatch) => {
  dispatch({ type: GET_STATIONS, payload: stations });
  setTimeout(() => {
    dispatch({ type: TOGGLE_STATIONS_LOADING });
  }, 2000);
};
