import { useReducer } from 'react';
import showsContext from './showsContext';
import showsReducer from './showsReducer';
import clientAxios from '../config/axiosConfig';

import { GET_SHOWS, GET_INFO } from '../types';

const ShowsState = props => {

  const initialState = {
    shows: [],
    info: {}
  };

  const [state, dispatch] = useReducer(showsReducer, initialState);

  const getShows = async (movie) => {
    const response = await clientAxios.get(`/search/shows?q=:${movie}`);
    dispatch({
      type: GET_SHOWS,
      payload: response.data
    });
  };

  const getInfo = async (id) => {
    const response = await clientAxios.get(`/shows/${id}`);
    dispatch({
      type: GET_INFO,
      payload: response.data
    });
  }

  return (
    <showsContext.Provider value={{ shows: state.shows, info: state.info, getShows, getInfo }}>
      {props.children}
    </showsContext.Provider>
  );
}

export default ShowsState;