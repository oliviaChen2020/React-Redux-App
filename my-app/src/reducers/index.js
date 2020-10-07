import { FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAILURE } from '../actions'


const initialState ={
    message: null,
    isFetching: false,
    error: ""
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCHING_QUOTE_START:
            return{
                ...state,
                isFetching: true
            }

        case FETCHING_QUOTE_SUCCESS:
            return{
                ...state,
                isFetching: false,
                message: action.payload
            }

        case FETCHING_QUOTE_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state;
    }
}