import {Violations} from '../../src/containers/Violations';
import ViolationSquares from '../../src/components/ViolationSquares';
import ViolationCount from '../../src/components/ViolationCount';
import { ViolationList } from '../../src/components/ViolationList';
import ViolationClickMessage from '../../src/components/ViolationClickMessage';
import OpenAllToggle from '../../src/components/OpenAllToggle';
import InfoCard from '../../src/components/InfoCard';

describe('<Violations />', ()=>{
  const spy = sinon.spy();
  const props = {
    violations: [{violationclass:'A'}],
    visible: true,
    filteredViolations: [{violationclass:'A'}],
    showClickMessage: true,
    violationClassFilter: [],
    dispatch: spy
  };
  const v = shallow(<Violations {...props} />);

  it('has class mv100 & tc', ()=>{
    expect(v.hasClass('mv100')).to.be.true;
    expect(v.hasClass('tc')).to.be.true;
  });

  it('returns empty span if visible is false', ()=>{
    let c = shallow(<Violations visible={false} />);
    expect(c.html()).to.eql('<span></span>');
  });

  it('contains ViolationCount', ()=>{
    expect(v.find(ViolationCount)).to.have.length(1);
    expect(v.find(ViolationCount).props().count).to.eql('1');
  });

  it('contains OpenAllToggle', ()=>{
    expect(v.find(OpenAllToggle)).to.have.length(1);
  }); 

  it('contains ViolationSquares', ()=>{
    expect(v.find(ViolationSquares)).to.have.length(1);
    expect(v.find(ViolationSquares).props()).to.have.property('violations');
    expect(v.find(ViolationSquares).props()).to.have.property('violationClassFilter');
  });

  it('contains ViolationList', ()=>{
    expect(v.find(ViolationList)).to.have.length(1);
    expect(v.find(ViolationList).props()).to.have.property('dispatch');
    expect(v.find(ViolationList).props()).to.have.property('violations');
    expect(v.find(ViolationList).props().violations).to.eql([{violationclass:'A'}]);
  });

  it('contains ViolationClickMessage', ()=>{
    expect(v.find(ViolationClickMessage)).to.have.length(1);
  });

  it('contains InfoCard', ()=>{
    expect(v.find(InfoCard)).to.have.length(1);
  });
});

