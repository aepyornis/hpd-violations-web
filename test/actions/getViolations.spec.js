import {
  violationsAction, 
  handleResult,
  handleErr,
  getViolations
} from '../../src/actions/getViolations';

var fetch = require('../../src/util/fetch');

describe('actions/getViolations', ()=>{

  describe('violationsAction()', ()=>{
    it('returns object with type and result', ()=>{
      expect(violationsAction('GET', 'data')).to.eql({
        type:"VIOLATION",
        status: 'GET',
        result: 'data'
    });
  });

  });
  
  describe('handleResult()', ()=>{
    it('Dispatches VIOLATION NOT FOUND when array is 0', ()=>{
      let dispatchSpy = sinon.spy();
      let res = [];
      handleResult(dispatchSpy, res);
      expect(dispatchSpy.calledOnce).to.eql(true);
      expect(dispatchSpy.firstCall.args[0])
        .to.eql({
          type:"VIOLATION",
          status:'VIOLATION_NOT_FOUND',
          result: res
        });
    });

    it('Dispatches VIOLATION NOT FOUND when something else is returned', ()=>{
      let dispatchSpy = sinon.spy();
      handleResult(dispatchSpy, null);
      expect(dispatchSpy.calledOnce).to.eql(true);
      expect(dispatchSpy.firstCall.args[0])
        .to.eql({
          type:"VIOLATION",
          status:'VIOLATION_NOT_FOUND',
          result: null
        });
    });
    
    it('Dispatches VIOLATION_FOUND', ()=>{
      let dispatchSpy = sinon.spy();
      let res = [{violationid: 123}, {violationid: 124}];
      handleResult(dispatchSpy, res);
      expect(dispatchSpy.calledOnce).to.eql(true);
      expect(dispatchSpy.firstCall.args[0])
        .to.eql({
          type: "VIOLATION",
          status:'VIOLATION_FOUND',
          result: res
        });
    });
  });
  
  describe('handleErr()', ()=>{
    it('dispatches VIOLATION_NETWORK_ERROR', ()=>{
      let dispatchSpy = sinon.spy();
      let error = new Error('NETWORK ERROR');
      handleErr(dispatchSpy, error);
      expect(dispatchSpy.calledOnce).to.eql(true);
      expect(dispatchSpy.firstCall.args[0])
        .to.eql({
          type: "VIOLATION",
          status:'VIOLATION_NETWORK_ERROR',
          result: error
        });

    });
    
  });

  describe('getViolations()', ()=>{
    
    it('returns a function', ()=> expect(getViolations('000')).to.be.a('Function'));

    describe('function returned by getViolations()', ()=>{
      let spy;
      let calledThunk;
      before( () => {
        sinon.spy(fetch, 'violationsFetch');
        spy = sinon.spy();
        calledThunk = getViolations('000')(spy);
      });
      
      after( ()  => fetch.violationsFetch.restore() );

      it('dispatches VIOLATION IN PROGRESS', ()=>{
        expect(spy.firstCall.args[0])
          .to.eql({ type: "VIOLATION", status: 'VIOLATION_IN_PROGRESS', result: []});
      });
      it('returns a promise', () => expect(calledThunk).to.be.a('promise'));
    });
  });

    
});
