import { GET_SHOWS, GET_INFO } from '../types';

const showsReducer = (state, action) => {
  switch (action.type) {
    case GET_SHOWS:
      return {
        ...state,
        shows: action.payload
      };
    case GET_INFO:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
}

export default showsReducer;