import React from 'react'
import { connect } from 'react-redux'
import { getQuote } from '../actions'


const Quotes = (props)=> {
    return(
        <div>
            <button onClick={props.getQuote}> Get Image</button>
            {/* {!props.message&& !props.isFetching &&(<h2>Go Fetch New Image!</h2>)} */}
            {/* {props.isFetching} */}
            {props.message && !props.isFetching && (
                <div>
                    <img className ="image" src={props.message.message} alt ="image" />
                </div>
            )}
        </div>
    )

}

const mapToStateProps = state =>{
    return{
        message:state.message,
        isFetching:state.isFetching,
        error:state.error
    }
}
export default connect(mapToStateProps, {getQuote})(Quotes);