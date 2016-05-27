import {openSidebar, closeSidebar} from '../../src/actions/sidebar';


describe('sidebar actions', ()=>{
  
  it('returns OPEN_SIDEBAR obj', ()=>{
    expect(openSidebar()).to.eql({type: 'OPEN_SIDEBAR'});
  });
  
  it('returns CLOSE_SIDEBAR obj', ()=>{
    expect(closeSidebar()).to.eql({type: 'CLOSE_SIDEBAR'});
  });

});
