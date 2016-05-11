import React from 'react';
import { connect } from 'react-redux';
import { submitAddress } from '../actions/actions';

let AddressSearch = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => input = node} />
      <button onClick={() => {
        dispatch(submitAddress(input.value));
      }}>Search</button>
    </div>
  );
}

AddressSearch = connect()(AddressSearch);

export default AddressSearch;
