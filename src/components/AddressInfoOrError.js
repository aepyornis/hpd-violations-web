import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { isUndefined } from 'lodash';

export const orEmptyString = (x) => isUndefined(x) ? '' : x;

/**
 * Creates an Address string from fields: houseNumber, firstStreetNameNormalized, zipCode
 * @param {object} a - address
 * @returns {String} 
 */
export const formatAddress = a => `${a.houseNumber} ${a.firstStreetNameNormalized}, ${a.zipCode}`;

/**
 * Show when status is DONE_FOUND
 */
export const AddressInfo = ({address, bbl}) => (
     <div>
        <p><strong>{address}</strong></p>
        <p><strong>BBL: </strong>{bbl}</p>
      </div>
);

/**
 * Show when status is IN_PROGRESS / FAILED
 */
export const SimpleMessage  = ({text}) => <h5>{text}</h5>;

/**
 * Show when status is DONE_NOT_FOUND
 */
export const NotFoundMessage = ({address}) => {
  return (
    <div>
      <SimpleMessage text="Could not find your address in the database:" />
      <SimpleMessage text={orEmptyString(address.message)} />
    </div>
  );
};

/**
 * Returns React Element based on geoclient status
 * @param {String} status
 * @param {Object} address
 * @returns {React.Component} 
 */
export const infoContentSwitcher = (status, address) => {
  switch(status) {
  case 'IN_PROGRESS':
    return <SimpleMessage text="Searching the address..." />;
  case 'DONE_FOUND':
    return <AddressInfo address={formatAddress(address)} bbl={address.bbl}/>;
  case 'DONE_NOT_FOUND':
    return  <NotFoundMessage address={address} />;
  case 'FAILED':
    return <SimpleMessage text="Geoclient appear to be down..." />;
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
  return {
    status: state.geoclient.status,
    address: state.geoclient.result.address
  };
};


/**
 * Displays Message or Information in box according the search address status.
 * @param {String} status
 * @param {Object} address
 */
export const AddressInfoOrError = ({status, address}) => (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4" id="info-container">
         {infoContentSwitcher(status, address)}
       </div>
       <div className="col-4"></div>
    </div>
);

AddressInfoOrError.propTypes = {
  address: PropTypes.object,
  status: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(AddressInfoOrError);

