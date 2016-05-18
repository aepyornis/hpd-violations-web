import React from 'react';
import { connect } from 'react-redux';
import { searchAddress, forgotToSelectBoro } from '../actions/searchAddress';
import { addressSearchSelect } from '../style';

/**
 * Dispatches Actions when Button is clicked.
 * @param {function} dispatch
 * @param {object} Address
 */
export const onButtonClick = (dispatch, address) => (address.boro === 'X') ? 
  dispatch(forgotToSelectBoro()) :
  dispatch(searchAddress(address));

export const AddressSearch = ({ dispatch}) => {
  const defaultVal = {value: ''};
  let houseNumber = defaultVal;
  let street = defaultVal;
  let boro = defaultVal;
  
  return (
    <div>
      <input id="houseNumberInput" 
             ref={node => houseNumber = node} 
             class="form-input" />
        <input ref={node => street = node}  
               className="form-input" />
          
        <select ref={node => boro = node} 
            className="form-select" 
            style={addressSearchSelect} >
          
            <option value='X'>Borough:</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Bronx">Bronx</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Staten Island">Staten Island</option>
          </select>
          
        <button className="btn-small" 
                onClick={() => {
                  const address = {
                    houseNumber: houseNumber.value,
                    street: street.value,
                    boro: boro.value
                  };
                  onButtonClick(dispatch, address);
          }}
           >Search</button>
    </div>
  );
};

export default connect()(AddressSearch);
