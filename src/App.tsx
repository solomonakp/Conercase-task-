import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader';
import StationBox from './components/StationBox';
import { RootState } from './redux/reducers/index';
import { getStations } from './redux/reducers/radio/radioActions';
function App() {
  const { isLoading } = useSelector((state: RootState) => state.radio);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStations());
  }, []);

  return <div className='App'>{isLoading ? <Loader /> : <StationBox />}</div>;
}

export default App;
