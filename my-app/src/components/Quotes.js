import React from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';

const Quotes = (props) => {
  return (
    <div>
      <button onClick={props.getQuote}> Pick a Dish</button>
      {/* {!props.message&& !props.isFetching &&(<h2>Go Fetch New Image!</h2>)} */}
      {/* {props.isFetching} */}
      {props.imageURL && !props.isFetching && (
        <div>
          <img
            width="800px"
            height="600px"
            className="image"
            src={props.imageURL.image}
            alt="image"
          />
        </div>
      )}
    </div>
  );
};

const mapToStateProps = (state) => {
  return {
    imageURL: state.imageURL,
    isFetching: state.isFetching,
    error: state.error,
  };
};
export default connect(mapToStateProps, { getQuote })(Quotes);
