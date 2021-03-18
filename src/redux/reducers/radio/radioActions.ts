import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_STATIONS } from './radioTypes';
import { stations } from '../../../stationsObject';
import { RootState } from '../index';
import {
  TOGGLE_STATIONS_LOADING,
  SET_STATION,
  RadioActionTypes,
} from './radioTypes';

export type Dispatch = ThunkDispatch<RootState, void, Action>;
export type GetState = () => RootState;

export const toggleStationsLoading = (): RadioActionTypes => {
  return {
    type: TOGGLE_STATIONS_LOADING,
  };
};

export const toggleStation = (index: number) => (dispatch: Dispatch) => {
  dispatch({ type: SET_STATION, payload: index });
};

export const getStations = () => (dispatch: Dispatch) => {
  dispatch({ type: GET_STATIONS, payload: stations });
  setTimeout(() => {
    dispatch({ type: TOGGLE_STATIONS_LOADING });
  }, 2000);
};
