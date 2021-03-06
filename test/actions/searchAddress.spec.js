import {
  geoclient,
  hasBBL,
  handleResult,
  handleErr,
  searchAddress,
  forgotToSelectBoro
} from '../../src/actions/searchAddress';

var fetch = require('../../src/util/fetch');
var violationAction = require('../../src/actions/getViolations');

describe('actions/searchAddress.js', ()=> {
  let result = {address: {'address': '123 Violation Road', bbl: '666'}};
  
  describe('geoclient', () => {

    it('returns object with correct fields', ()=>{
      let g = geoclient('MY_STATUS', {'data': 123});
      expect(g).to.eql({status: 'MY_STATUS', type: 'GEOCLIENT', result: {'data': 123}});
    });

    it('result field defaults to empty obj', ()=>{
      let g = geoclient('IN_PROGRESS');
      expect(g.result).to.eql({});
    });

  });

  describe('hasBBL', ()=> {

    it('returns true if object has field "bbl"nested below address', ()=>{
      expect(hasBBL({address:{'x': 1, 'bbl': '123'}})).to.be.true;
    });

    it('returns false if object does not have field "bbl"', ()=>{
      expect(hasBBL({address:{'x': 1}})).to.be.false;
    });

  });

  describe('forgotToSelectBoro', () =>{
    it('returns FORGOT_TO_SELECT_BORO geoclient action', ()=> expect(forgotToSelectBoro().status).to.eql('FORGOT_TO_SELECT_BORO'));

  });

  describe('handleResult', ()=>{
    
    it('dispatches DONE_FOUND ', ()=>{
      let dispatch = sinon.spy();
      handleResult(dispatch, { status: 'OK', bbl: '1234'});
      
      expect(dispatch.calledTwice).to.eql(true);
      expect(dispatch.firstCall.args[0])
        .to.eql({ type: 'GEOCLIENT',
                  status: 'DONE_FOUND',
                  result: { status: 'OK', bbl: '1234'}});
    });

    it('dispatches getViolations Thunk', ()=>{
      sinon.spy(violationAction, 'getViolations');
      let dispatch = sinon.spy();
      
      handleResult(dispatch, { status: 'OK', bbl: '1234'});
      
      expect(dispatch.calledTwice).to.eql(true);
      expect(violationAction.getViolations.calledOnce).to.eql(true);
      expect(violationAction.getViolations.firstCall.args[0]).to.eql('1234');
      
      violationAction.getViolations.restore();
    });

    it('dispatches DONE_NOT_FOUND', ()=>{
      let dispatch = sinon.spy();
      let result = {address: {'message': 'ADDRESS NOT FOUND'}};
      handleResult(dispatch, result);

      expect(dispatch.calledOnce).to.eql(true);
      expect(dispatch.firstCall.args[0])
        .to.eql({ type: 'GEOCLIENT',
                  status: 'DONE_NOT_FOUND',
                  result: {address: {'message': 'ADDRESS NOT FOUND'}}});
    });
    
  });

  describe('handleErr', ()=>{
    it('dispatches FAILED', ()=>{
      let dispatch = sinon.spy();
      let err = new Error('OH MY GOD AN ERROR OCCURRED');
      handleErr(dispatch, err);
      expect(dispatch.calledOnce).to.eql(true);
      expect(dispatch.firstCall.args[0])
        .to.eql({ type: 'GEOCLIENT',
                  status: 'FAILED',
                  result: err});
    });
  });

  describe('searchAddress', ()=>{
    const address = {
      houseNumber: '123',
      street: 'Main St.',
      boro: 'Queens'
    };

    it('returns a function', ()=> expect(searchAddress(address)).to.be.instanceof(Function));
    
    describe('function returned by searchAddress()', () =>{
      let spy;
      let calledThunk;
      before( () => {
        sinon.spy(fetch, 'geocodeFetch');
        spy = sinon.spy();
        calledThunk = searchAddress(address)(spy);
      });
      after( ()  => fetch.geocodeFetch.restore() );

      it('dispatches IN PROGRESS when called', ()=>{
        expect(spy.calledOnce).to.eql(true);
        expect(spy.firstCall.args[0])
          .to.eql({ type: 'GEOCLIENT', status: 'IN_PROGRESS', result: {}});
      });

      it('calls geoclientFetch with correct args', ()=>{
        expect(fetch.geocodeFetch.calledOnce).to.eql(true);
        expect(fetch.geocodeFetch.firstCall.args).to.eql(['123', 'Main St.', 'Queens']);
      });

      it('returns a promise', () => expect(calledThunk).to.be.a('promise'));

    });
    
  });

});
