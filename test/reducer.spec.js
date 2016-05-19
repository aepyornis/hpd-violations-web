import {
  reducer,
  violationClick,
  addOrRemove
} from '../src/reducers/index';

import {violationClick as clickAction} from '../src/actions/violationClick';

describe.only('Reducer', ()=>{

  describe('addOrRemove()', ()=>{
    it('adds item to array',() => expect(addOrRemove([1,2], 3)).to.eql([1,2,3]));
    it('removes item from array',() => expect(addOrRemove([1,2], 2)).to.eql([1]));
  });
  
  describe('violationClick', ()=>{
    
    it('Adds Violation Class to array', ()=>{
      let newState = violationClick({violationClassFilter: []}, clickAction('C'));
      expect(newState.violationClassFilter).to.eql(['C']);
    });
    
    it('Removes ViolationClass from array', ()=>{
      let newState = violationClick({violationClassFilter: ['C', 'A']}, clickAction('C'));
      expect(newState.violationClassFilter).to.eql(['A']);
    });
    
    it('returns updated state without mutation', ()=>{
      const originalState = {violationClassFilter: ['C', 'A']};
      const newState = violationClick(originalState, clickAction('B'));
      expect(originalState).to.eql({violationClassFilter: ['C', 'A']});
      expect(newState).to.eql({violationClassFilter: ['C', 'A', 'B']});
    });
  });

});
