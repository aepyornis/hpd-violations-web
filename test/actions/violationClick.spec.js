import {violationClick} from '../../src/actions/violationClick';

describe('violationClick', ()=>{
  it('returns object with type VIOLATION_CLICK', ()=>{
    expect(violationClick('X').type).to.eql('VIOLATION_CLICK');
  });
  it('returns object with violationClassFilter', ()=>{
    expect(violationClick('A').violationClassFilter).to.eql('A');
  });
});
