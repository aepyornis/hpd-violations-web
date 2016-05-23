import {ViolationSquare} from '../../src/components/ViolationSquare';
import { violationClick } from '../../src/actions/violationClick';

describe('<ViolationSquare />', ()=>{
  it('contains two <h1>', ()=>{
    let c = shallow(<ViolationSquare violationclass="B" count="3" />);
    expect(c.find('h1')).to.have.length(2);
    expect(c.find('h1').at(0).text()).to.eql('B');
    expect(c.find('h1').at(1).text()).to.eql('3');
  });

  it('Calls dispatch function with violationclick action as arg', ()=>{
    let spy = sinon.spy();
    let c = shallow(<ViolationSquare violationclass="B" count="3" dispatch={spy} />);
    c.simulate('click');
    expect(spy.calledOnce).to.be.true;
    expect(spy.args[0][0]).to.eql(violationClick('B'));
  });

});
