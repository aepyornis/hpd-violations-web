import {
  geoclient,
  hasBBL,
  handleResult,
  handleErr
} from '../../src/actions/searchAddress';

describe.only('actions/searchAddress.js', ()=> {
  
  describe('geoclient', () => {

    it('returns object with correct fields', ()=>{
      let g = geoclient('MY_STATUS', {'data': 123});
      expect(g).to.eql({status: 'MY_STATUS', type: 'GEOCLIENT', result: {'data': 123}});
    });

    it('result field defaults to blank string', ()=>{
      let g = geoclient('IN_PROGRESS');
      expect(g.result).to.eql('');
    });

  });

  describe('hasBBL', ()=> {

    it('returns true if object has field "bbl"', ()=>{
      expect(hasBBL({'x': 1, 'bbl': '123'})).to.be.true;
    });

    it('returns false if object does not have field "bbl"', ()=>{
      expect(hasBBL({'x': 1})).to.be.false;

    });
  });

  describe('handleResult', ()=>{
    
    it('dispatches DONE_FOUND ', ()=>{
      let dispatch = sinon.spy();
      let result = {'address': '123 Violation Road', bbl: '666'};
      
      handleResult(dispatch, result);
      
      expect(dispatch.calledOnce).to.eql(true);
      expect(dispatch.firstCall.args[0])
        .to.eql({ type: 'GEOCLIENT',
                  status: 'DONE_FOUND',
                  result: { address: '123 Violation Road', bbl: '666' }});
      
    });

    it('dispatches DONE_NOT_FOUND', ()=>{
      let dispatch = sinon.spy();
      let result = {'message': 'ADDRESS NOT FOUND'};
      handleResult(dispatch, result);

      expect(dispatch.calledOnce).to.eql(true);
      expect(dispatch.firstCall.args[0])
        .to.eql({ type: 'GEOCLIENT',
                  status: 'DONE_NOT_FOUND',
                  result: {'message': 'ADDRESS NOT FOUND'}});
    });
    
  });

  describe('handleErr', ()=>{
    it('disaptches FAILED', ()=>{
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

});
