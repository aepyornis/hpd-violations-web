import {AddressSearch} from '../src/components/AddressSearch';
import {createStore} from  'redux';
import {reducer} from '../src/reducers/index';

const actions = require('../src/actions/searchAddress');

describe.only('<AddressSearch>', () =>{
  const store = createStore(reducer);
  let as; 

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
    expect(as.find('option')).to.have.length(5);
  });

  it('Dispatches Action - searchAddress -- when button is clicked', () =>{
    expect(store.getState()).to.eql({});
    as.find('button').simulate('click');
    expect(store.getState())
      .to.eql({ status: 'DONE_FOUND',result: {'data': 1000}});
  });
  
});

