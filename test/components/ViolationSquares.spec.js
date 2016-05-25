import {isElementOfType} from 'react-addons-test-utils';
import {
  squareProps, 
  ViolationSquares, 
  wrapDispatchWithAction
} from '../../src/components/ViolationSquares';

import {ViolationSquare} from '../../src/components/ViolationSquare';

const violations = [{violationclass: 'A'}, {violationclass: 'B'}, {violationclass: 'A'}, {violationclass: 'C'}];


describe('<ViolationSquares />', ()=>{
  // 2 As, 1 B, 1C, no Is
  describe('wrapDispatchWithAction', ()=>{
    it('inserts violationClick into dispatch func', ()=>{
      let dispatch = sinon.spy();
      let wrappedDispatch = wrapDispatchWithAction(dispatch);
      expect(wrappedDispatch).to.be.a('Function');

      wrappedDispatch('A');

      expect(dispatch.args[0][0]).to.eql({
        type: 'VIOLATION_CLICK',
        violationClassFilter: 'A'
      });
    });
  });
  
  describe('squareProps()',()=>{
    
    it('returns 4 objects with correct fields', ()=>{
      let props = squareProps(violations);
      expect(props).to.have.length(4);
      props.forEach( prop => expect(prop).to.have.keys('violationclass', 'count'));
    });

  });

  describe('<ViolationSquares />', ()=>{

   it('renders 4 ViolationSquare Elements', ()=>{
      let component = shallow(<ViolationSquares violations={violations} />);
      expect(component.find(ViolationSquare)).to.have.length(4);
    });

    it('passes violationClassFilter to squares', ()=>{
      let component = shallow(<ViolationSquares violations={violations} violationClassFilter={['A']}/>);
      component.find(ViolationSquare).forEach(sq => {
        expect(sq.props().violationClassFilter).to.eql(['A']);
      });

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

    it.skip('injects dispatch of violationClick action to child <ViolationSquare />', ()=>{
      let spy = sinon.spy();
      let component = shallow(<ViolationSquares violations={violations} dispatch={spy}/>);
      //expect(component.find(ViolationSquare).at(1).props().handleClick).to.eql(spy);
      expect(spy.calledOnce).to.eql(true);
      // expect(dispatch.args[0][0]).to.eql({
      //   type: 'VIOLATION_CLICK',
      //   violationClassFilter: ''
      // });
    }); 
  });

  

});


