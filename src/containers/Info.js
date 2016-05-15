import { connect } from 'react-redux';
import Display from '../components/Display';

const mapStateToProps = state => ({'input': state});

export default connect(mapStateToProps)(Display);
