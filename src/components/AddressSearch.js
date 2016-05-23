import React from 'react';
import { connect } from 'react-redux';
import { searchAddress, forgotToSelectBoro } from '../actions/searchAddress';
import { violationsAction } from '../actions/getViolations';


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
    
/**
 * Address Search Component containing: 
 * House Number input,Street Name input, and Borough Select
 * @param {function} dispatch
 * @returns {React.Component} 
 */
export const AddressSearch = ({ dispatch}) => {
  const defaultVal = {value: ''};
  let houseNumber = defaultVal;
  let street = defaultVal;
  let boro = defaultVal;
  
  return (
      <div className="tc mw100">
      <input id="houseNumberInput"
             placeholder="House number..."
             ref={node => houseNumber = node} 
             className="mw4 f6" />
        <input ref={node => street = node}  
               placeholder="Street name..."
               className="ml2 mr2 mw5 f6" />
          
        <select ref={node => boro = node} 
            className="mr2 f6">
            <option value='X'>Borough:</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Bronx">Bronx</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Staten Island">Staten Island</option>
          </select>
          
        <button onClick={() => {
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
