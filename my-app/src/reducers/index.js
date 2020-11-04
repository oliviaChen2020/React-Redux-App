import {
  FETCHING_DATA_START,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from '../actions';

const initialState = {
  imageURL: null,
  isFetching: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        imageURL: action.payload,
      };

    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
