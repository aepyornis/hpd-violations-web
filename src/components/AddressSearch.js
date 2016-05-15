import React from 'react';
import { connect } from 'react-redux';
import {includes, isUndefined} from 'lodash';
import { searchAddress } from '../actions/searchAddress';


/**
 * Return True if there are .value is undefined
 * @param {array} inputs
 * @returns {boolean}
 */
export const hasUndefinedValue = (inputs) => includes(inputs.map(v => isUndefined(v.value), true));

export const AddressSearch = ({ dispatch }) => {
  const defaultVal = {value: ''};
  let houseNumber = defaultVal;
  let street = defaultVal;
  let boro = defaultVal;
  
  return (
    <div>
      <input id="houseNumberInput" ref={node => houseNumber = node} />
      <input ref={node => street = node} />
      <select ref={node => boro = node}>
        <option>Borough:</option>
        <option>Manhattan</option>
        <option>Bronx</option>
        <option>Brooklyn</option>
        <option>Queens</option>
        <option>Staten Island</option>
      </select>
      <button onClick={() => {
        const address = {
            houseNumber: houseNumber.value,
            street: street.value,
            boro: boro.value
          };
        dispatch(searchAddress(address));
      }}>Search</button>
    </div>
  );
};

export default connect()(AddressSearch);
