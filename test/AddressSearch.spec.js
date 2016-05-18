import {AddressSearch, onButtonClick} from '../src/components/AddressSearch';
import reducer from '../src/reducers/index';

const actions = require('../src/actions/searchAddress');

describe('<AddressSearch>', () =>{
  let finalState = {
    geoclient: { status: 'DONE_FOUND',result: {'data': 1000}, type: "GEOCLIENT"},
    violations: {status: 'INIT'}            
  };
  
  before(()=> {
    sinon.stub(actions, 'searchAddress').returns({
      type: 'GEOCLIENT',
      status: 'DONE_FOUND',
      result: {'data': 1000}
    });
  });

  after(()=> actions.searchAddress.restore());

  it('Contains 2 inputs, 1 select, 6 options, and 1 button', ()=>{
    let as = shallow(<AddressSearch/>);
    expect(as.find('input')).to.have.length(2);
    expect(as.find('select')).to.have.length(1);
    expect(as.find('button')).to.have.length(1);
    expect(as.find('option')).to.have.length(6);
  });

  it('Dispatches action when button is clicked', () =>{
    let spy = sinon.spy();
    let AddSearch = shallow(<AddressSearch dispatch={spy}/>); 
    AddSearch.find('button').simulate('click');
    expect(spy.calledOnce).to.eql(true);
  });

  describe('onButtonClick', ()=>{
    
    it('dispatches searchAddress action if boro is selected', ()=>{
      let spy = sinon.spy();
      onButtonClick(spy, {boro:'Brooklyn'});
      expect(spy.secondCall.args[0]).to.eql(finalState.geoclient);
    });
    
    it('dispatches ViolationsAction - INIT - if boro is selected', ()=>{
      let spy = sinon.spy();
      onButtonClick(spy, {boro:'Brooklyn'});
      expect(spy.firstCall.args[0]).to.eql({type: 'VIOLATION', status: 'INIT', result: ""});
      expect(spy.calledTwice).to.eql(true);
    });
    
    it('dispatches forgotToSelectBoro action if boro is not selected', ()=>{
      let spy = sinon.spy();
      onButtonClick(spy, {boro:'X'});
      expect(spy.firstCall.args[0].status).to.eql('FORGOT_TO_SELECT_BORO');
    });

  });
  
});
