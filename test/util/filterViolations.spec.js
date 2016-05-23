import {
  violationClassFilter, 
  openAllFilter, 
  filterViolations
} from '../../src/util/filterViolations';

describe('filterViolations.js', ()=>{

  describe('violationClassFilter()', ()=>{
    // 2 As, 1B, 1C
    let violations = [{violationclass: 'A'}, {violationclass: 'B'}, {violationclass: 'A'}, {violationclass: 'C'}];
    it('Filters violations with one option', ()=>{
      let filter = ['A'];
      expect(violationClassFilter(filter, violations)).to.have.length(2);
    });
    it('Filters violations with multiple selections', ()=>{
      let filter = ['A', 'C'];
      expect(violationClassFilter(filter, violations)).to.have.length(3);
    });
    it('returns empty array if none are selected', ()=>{
      let filter = [];
      expect(violationClassFilter(filter, violations)).to.eql([]);
    });
  });

  describe('openAllFilter()', ()=>{
    // 1 open, 2 closed
    let violations = [{currentstatusid: 4},{currentstatusid: 19},{currentstatusid: 19}];
    it('returns the array unmodified if the status is set to ALL',()=>{
      expect(openAllFilter('ALL', violations)).to.have.length(3);
    });
    it('filters open violation objects with status 19', ()=>{
      expect(openAllFilter('OPEN', violations)).to.have.length(1);
    });
  });

  describe('filterViolations',()=>{
    let violations = [{violationclass: 'A', currentstatusid: 19}, 
                      {violationclass: 'B', currentstatusid: 19}, 
                      {violationclass: 'A', currentstatusid: 20}, 
                      {violationclass: 'C', currentstatusid: 19}];

    it('filter violations based on toggleStatus and violationClass', ()=>{
      expect(filterViolations('ALL', [], violations)).to.have.length(0);
      expect(filterViolations('ALL', ['B'], violations)).to.have.length(1);
      expect(filterViolations('ALL', ['A'], violations)).to.have.length(2);
      expect(filterViolations('ALL', ['B', 'A'], violations)).to.have.length(3);
      expect(filterViolations('OPEN', ['A'], violations)).to.have.length(1);
      expect(filterViolations('OPEN', ['C'], violations)).to.have.length(0);
    });
  });
});
