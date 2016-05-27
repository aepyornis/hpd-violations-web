import {SidebarContent} from '../../src/components/SidebarContent';

describe('<SidebarContent />', ()=>{
  let spy = sinon.spy();
  let sidebarC = shallow(<SidebarContent dispatch={spy}/>);
  
  it('contains button', ()=> expect(sidebarC.find('button')).to.have.length(1));

  it('dispatches closeSidebar action when button is clicked', ()=>{
    expect(spy.calledOnce).to.be.false;
    sidebarC.find('button').simulate('click');
    expect(spy.calledOnce).to.be.true;
    expect(spy.args[0][0]).to.eql({type: 'CLOSE_SIDEBAR'});
  });

});
