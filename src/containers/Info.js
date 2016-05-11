import { connect } from 'react-redux';
import Display from '../components/Display';

const mapStateToProps = state => ({'address': state.address});

export default connect(mapStateToProps)(Display);
