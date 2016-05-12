import React from 'react';
import { connect } from 'react-redux';
import { searchAddress } from '../actions/searchAddress';

export const AddressSearch = ({ dispatch }) => {
  let houseNumber, street, boro;
  
  return (
    <div>
      <input ref={node => houseNumber = node.value} />
      <input ref={node => street = node.value} />
      <select ref={node => boro = node.value}>
        <option>Manhattan</option>
        <option>Bronx</option>
        <option>Brooklyn</option>
        <option>Queens</option>
        <option>Staten Island</option>
      </select>
      <button onClick={() => {
       
        let address = {
          houseNumber: houseNumber,
          street: street,
          boro: boro
        };
      dispatch(searchAddress(address));
      }}>Search</button>
    </div>
  );
};

export default connect()(AddressSearch);
