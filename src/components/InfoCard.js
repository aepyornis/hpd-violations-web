import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {infoModal} from '../style';
import {capitalize} from 'lodash';
import toggleInfoCard from '../actions/toggleInfoCard';

// string -> string
export const formatDate = (d) =>  {
  try {
    return d.slice(0,10);
  } 
  catch (e) {
    return '';
  }
};

export const CloseButton = ({closeEvent}) => (
   <div className="mv100 tc mt1">
     <button className="h2 w3 mt4"
             onClick={()=> closeEvent()}>close</button>
   </div>
);

CloseButton.propTypes = {
  closeEvent: PropTypes.func.isRequired
};

export const InfoItem = ({title, info}) => <p style={infoModal.p}><strong>{title}:</strong> {info}</p>;


/**
 * Content of the info card modal
 * @param {Object} violation
 */
export const InfoCardContent = ({violation}) => (
    <div>
      <h2 style={infoModal.header}>Violation Class: <strong>{violation.violationclass}</strong></h2>
      <h2 style={infoModal.header}>Inspected on: {formatDate(violation.inspectiondate)}</h2>
      <hr />
      <InfoItem title="Current Status" info={violation.currentstatus} />
      <InfoItem title="Last updated"  info={formatDate(violation.currentstatusdate)} />
      <InfoItem title="Original Certify By Date" info={formatDate(violation.originalcorrectbydate)} />
      <InfoItem title="Description" info={capitalize(violation.novdescription)} />
    </div>
);

/**
 * InfoCard Display
 * @param {Object} Violation
 * @param {Boolean} Open
 * @param {Function} Store Dispatch
 */
export const InfoCard = ({violation, open, dispatch}) => (
  <Modal 
    isOpen={open}
    style={infoModal}
  >
    { open ? <InfoCardContent violation={violation} /> : <div></div> }
    <CloseButton closeEvent={()=>dispatch(toggleInfoCard('CLOSE'))}/>
  </Modal>
);

InfoCard.propTypes = {
  violation: PropTypes.object,
  open: PropTypes.bool,
  dispatch: PropTypes.func
};

InfoCard.defaultProps = {
  violation: {},
  open: false
};

const mapStateToProps = state => {
  return {
    open: (state.infoCard !== 'CLOSE'),
    violation: (state.infoCard !== 'CLOSE') ? state.infoCard : {}
  };
};

 
export default connect(mapStateToProps)(InfoCard);

//<img src="open-iconic-master/svg/x.svg" alt="x">
//</img>
