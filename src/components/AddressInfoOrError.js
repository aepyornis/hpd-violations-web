import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { isUndefined, lowerCase, upperFirst, words} from 'lodash';

export const orEmptyString = (x) => isUndefined(x) ? '' : x;
const titleize = s => words(s).map(lowerCase).map(upperFirst).join(' ');

/**
 * Creates an Address string from fields: houseNumber, firstStreetNameNormalized, zipCode
 * @param {object} a - address
 * @returns {String} 
 */
export const formatAddress = a => `${a.houseNumber} ${a.firstStreetNameNormalized}, ${a.zipCode}`;

/**
 * Show when status is DONE_FOUND
 */
export const BblInfo = ({bbl}) => {
  return (
     <div>
      <p className="f6 tc"><strong>BBL: </strong>{bbl}</p>
     </div>
  );
};

/**
 * Show when status is IN_PROGRESS / FAILED
 */
export const SimpleMessage  = ({text}) => <p className="f4">{text}</p>;


/**
 * Returns React Element based on geoclient status
 * @param {String} status
 * @param {Object} result
 * @returns {React.Component} 
 */
export const infoContentSwitcher = (status, result) => {
  switch(status) {
  case 'INIT':
    return <SimpleMessage text="Type in an address to search!" />;
  case 'FORGOT_TO_SELECT_BORO':
    return <SimpleMessage text="Don't forget to select the Borough" />;
  case 'IN_PROGRESS':
    return <SimpleMessage text="Searching the address..." />;
  case 'DONE_FOUND':
    return <BblInfo bbl={result.bbl} />;
  case 'DONE_NOT_FOUND':
    return <SimpleMessage text="Could not find your address in the database:" />;
  case 'FAILED':
    return <SimpleMessage text="Geoclient appears to be down..." />;
  default:
    return <SimpleMessage text="Something went wrong!" />;
  }
};

/**
 * 
 * @param {object} state
 * @returns {object} 
 */
const mapStateToProps = (state) => {
  let s = state.geoclient.status;
  return {
    status: state.geoclient.status,
    error: (s === 'DONE_NOT_FOUND' || s === 'FAILED' || s === 'FORGOT_TO_SELECT_BORO'),
    result: state.geoclient.result
  };
};


/**
 * Displays Message or Information in box according the search address status.
 * @param {String} status
 * @param {Object} result
 * @param {Boolean} error
 */
export const AddressInfoOrError = ({status, result, error}) => {
  let bc = (error) ? 'red-back' : 'bg-light-silver';
  return (
      <div className="mv100 tc mt2 pt2">
      <div className={"pa2 mw6 dib rounded " + bc } 
          id="info-container">
         {infoContentSwitcher(status, result)}
      </div>
      </div>
  );
};

AddressInfoOrError.propTypes = {
  result: PropTypes.any,
  status: PropTypes.string.isRequired,
  error: PropTypes.bool
};

export default connect(mapStateToProps)(AddressInfoOrError);
