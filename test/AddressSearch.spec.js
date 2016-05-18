import {AddressSearch, onButtonClick} from '../src/components/AddressSearch';
import {createStore} from  'redux';
import reducer from '../src/reducers/index';

const actions = require('../src/actions/searchAddress');


describe('<AddressSearch>', () =>{
  const store = createStore(reducer);
  let as; 
  let finalState = {
    geoclient: { status: 'DONE_FOUND',result: {'data': 1000}, type: "GEOCLIENT"},
    violations: {}            
  };
  
  before(()=> {
    as = shallow(<AddressSearch dispatch={store.dispatch}/>);
    sinon.stub(actions, 'searchAddress').returns({
      type: 'GEOCLIENT',
      status: 'DONE_FOUND',
      result: {'data': 1000}
    });
  });

  after(()=> actions.searchAddress.restore());

  it('contains 2 inputs, 1 select, 5 optios, and 1 button', ()=>{
    expect(as.find('input')).to.have.length(2);
    expect(as.find('select')).to.have.length(1);
    expect(as.find('button')).to.have.length(1);
    expect(as.find('option')).to.have.length(6);
  });

  it('Dispatches Action - searchAddress -- when button is clicked', () =>{
    expect(store.getState()).to.eql({violations: {}, geoclient: {
      status: 'INIT',
      result: {
        address: {}
      }
    }});
    as.find('button').simulate('click');
    expect(store.getState()).to.eql(finalState);
  });

  describe('onButtonClick', ()=>{
    
    it('dispatches searchAddress action if boro is selected', ()=>{
      let spy = sinon.spy();
      onButtonClick(spy, {boro:'Brooklyn'});
      expect(spy.firstCall.args[0]).to.eql(finalState.geoclient);
    });
    
    it('dispatches forgotToSelectBoro action if boro is not selected', ()=>{
      let spy = sinon.spy();
      onButtonClick(spy, {boro:'X'});
      expect(spy.firstCall.args[0].status).to.eql('FORGOT_TO_SELECT_BORO');
    });

  });
  
});
