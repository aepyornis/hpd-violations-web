import {Violations, mapStateToProps, filterViolations} from '../../src/containers/Violations';
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

  describe('filterViolations()', ()=>{
    // 2 As, 1B, 1C
    let violations = [{violationclass: 'A'}, {violationclass: 'B'}, {violationclass: 'A'}, {violationclass: 'C'}];
    it('Filters violations with one option', ()=>{
      let filter = ['A'];
      expect(filterViolations(filter, violations)).to.have.length(2);
    });
    it('Filters violations with multiple selection', ()=>{
      let filter = ['A', 'C'];
      expect(filterViolations(filter, violations)).to.have.length(3);
    });
    it('returns empty array if none are selected', ()=>{
      let filter = [];
      expect(filterViolations(filter, violations)).to.eql([]);
    });
  });
});
