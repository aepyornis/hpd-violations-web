import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {infoModal} from '../style';
import {capitalize} from 'lodash';
import toggleInfoCard from '../actions/toggleInfoCard';

// string -> string
export const formatDate = (d) =>  d.slice(0,10);

export const CloseButton = ({closeEvent}) => (
  <div className="btn btn-small" 
       style={infoModal.closeButton}
       onClick={()=> closeEvent()}>
    <img src="open-iconic-master/svg/x.svg" alt="x">
    </img>
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
      <h4 style={infoModal.header}>Violation Class: <strong>{violation.violationclass}</strong></h4>
      <h5 style={infoModal.header}>Inspected on: {formatDate(violation.inspectiondate)}</h5>
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
