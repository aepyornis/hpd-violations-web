import {NavBar} from '../../src/components/NavBar';

describe('NavBar', ()=>{
 
  it('dispatches openSidebar action when clicked', ()=>{
     let spy = sinon.spy();
     let navbar = shallow(<NavBar dispatch={spy} />);
     navbar.find('span').simulate('click');
     expect(spy.calledOnce).to.be.true;
     expect(spy.args[0][0]).to.eql({type: 'OPEN_SIDEBAR'});
  });

});
