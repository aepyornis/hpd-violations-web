import {isElementOfType} from 'react-addons-test-utils';
import {squareProps, ViolationSquares} from '../../src/components/ViolationSquares';
import {ViolationSquare }from '../../src/components/ViolationSquare';

describe('<ViolationSquares />', ()=>{
  // 2 As, 1 B, 1C, no Is
  let violations = [{violationclass: 'A'}, {violationclass: 'B'}, {violationclass: 'A'}, {violationclass: 'C'}];
  
  describe('squareProps()',()=>{
    
    it('returns 4 objects with correct fields', ()=>{
      let props = squareProps(violations);
      expect(props).to.have.length(4);
      props.forEach( prop => expect(prop).to.have.keys('violationclass', 'count'));
    });

  });

  describe('<Violations />', ()=>{
    
    it('renders 4 ViolationSquare Elements', ()=>{
      let component = shallow(<ViolationSquares violations={violations} />);
      expect(component.find(ViolationSquare)).to.have.length(4);
    });
    
    it('renders count correctly', ()=>{
      let component = shallow(<ViolationSquares violations={violations} />);
      expect(component.props().children[0].props.violationclass).to.eql('C');
      expect(component.props().children[0].props.count).to.eql('1');
      expect(component.props().children[1].props.violationclass).to.eql('I');
      expect(component.props().children[1].props.count).to.eql('0');
      expect(component.props().children[2].props.violationclass).to.eql('B');
      expect(component.props().children[2].props.count).to.eql('1');
      expect(component.props().children[3].props.violationclass).to.eql('A');
      expect(component.props().children[3].props.count).to.eql('2');
    });
  });

});
