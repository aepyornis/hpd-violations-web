import {isElementOfType} from 'react-addons-test-utils';
import {makeSquares} from '../../src/containers/Violations';
import {ViolationSquare }from '../../src/components/ViolationSquare';

describe.only('container - violations', ()=>{
  
  describe('makeSquares',()=>{
    // 2 As, 1 B, 1C, no Is
    let violations = [{violationclass: 'A'}, {violationclass: 'B'}, {violationclass: 'A'}, {violationclass: 'C'}];
    
    it('returns 4 Violation Square Elements', ()=>{
      let squares = makeSquares(violations);
      expect(squares).to.have.length(4);
      squares.forEach(s => expect(isElementOfType(s, ViolationSquare)).to.eql(true));
    });
    
    it('ViolationSquare renders correctly', ()=>{
      let violSq = shallow(makeSquares(violations)[0]);
      expect(violSq.find('h3').at(0).text()).to.eql('C');
      expect(violSq.find('h3').at(1).text()).to.eql('1');
    });
  });

});
