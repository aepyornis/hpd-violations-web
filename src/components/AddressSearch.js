import React from 'react';
import { connect } from 'react-redux';
import { searchAddress, forgotToSelectBoro } from '../actions/searchAddress';
import { violationsAction } from '../actions/getViolations';
import { addressSearch } from '../style';

/**
 * Dispatches Actions when Button is clicked.
 * @param {function} dispatch
 * @param {object} Address
 */
export const onButtonClick = (dispatch, address) => {
  if (address.boro === 'X' || address.boro === '') {
    dispatch(forgotToSelectBoro());
  } else {
    dispatch(violationsAction('INIT'));
    dispatch(searchAddress(address));
  }
};
    
export const AddressSearch = ({ dispatch}) => {
  const defaultVal = {value: ''};
  let houseNumber = defaultVal;
  let street = defaultVal;
  let boro = defaultVal;
  
  return (
      <div style={addressSearch.container}>
      <input id="houseNumberInput" 
             ref={node => houseNumber = node} 
             className="form-input" />
        <input ref={node => street = node}  
               className="form-input" />
          
        <select ref={node => boro = node} 
            className="form-select" 
            style={addressSearch.select} >
          
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
