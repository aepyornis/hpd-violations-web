import {ViolationSquare} from '../../src/components/ViolationSquare';

describe('<ViolationSquare />', ()=>{
  it('contains two <h3>', ()=>{
    let c = shallow(<ViolationSquare violationclass="B" count="3" />);
    expect(c.find('h3')).to.have.length(2);
    expect(c.find('h3').at(0).text()).to.eql('B');
    expect(c.find('h3').at(1).text()).to.eql('3');
  });

});
