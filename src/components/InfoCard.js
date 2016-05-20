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
}

export const InfoItem = ({title, info}) => <p style={infoModal.p}>{title}: {info}</p>;

/**
 * InfoCard Display
 * @param {Object} Violation
 * @param {Boolean} Open
 */
export const InfoCard = ({violation, open, dispatch}) => (
  <Modal 
    isOpen={open}
    style={infoModal}
  >
    <h4 style={infoModal.center}>Violation Class: {violation.violationclass}</h4>
    <InfoItem title="Current Status" info={violation.currentstatus} />
    <InfoItem title="Last updated"  info={formatDate(violation.currentstatusdate)} />
    <InfoItem title="Inspection Date"  info={formatDate(violation.inspectiondate)} />
    <InfoItem title="Original Certify By Date" info={formatDate(violation.originalcorrectbydate)} />
    <InfoItem title="Description" info={capitalize(violation.novdescription)} />
    
    <CloseButton closeEvent={()=>dispatch(toggleInfoCard('CLOSE'))}/>
  </Modal>
);


InfoCard.propTypes = {
  violation: PropTypes.object,
  open: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    open: state.infoCardVisible,
    violation: state.violations.result[0]
  };
};

export default connect(mapStateToProps)(InfoCard);
