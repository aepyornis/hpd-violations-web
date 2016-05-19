import {Violations, mapStateToProps} from '../../src/containers/Violations';
import {ViolationSquares} from '../../src/components/ViolationSquares';
import reducer from '../../src/reducers/index';

describe('<Violations>', ()=>{
  it('renders <ViolationSquares> if status is VIOLATION FOUND', ()=>{
    const state = {violations: {status: 'VIOLATION_FOUND', result: []}};
    const props = mapStateToProps(state);
    const component = shallow(<Violations {...props} />);
    expect(component.find(ViolationSquares)).to.have.length(1);
  });
  it('renders nothing if status is not VIOLATION FOUND', ()=>{
    const state = {violations: {status: 'VIOLATION_NOT_FOUND', result: []}};
    const props = mapStateToProps(state);
    const component = shallow(<Violations {...props} />);
    expect(component.find(ViolationSquares)).to.have.length(0);
  });
});
