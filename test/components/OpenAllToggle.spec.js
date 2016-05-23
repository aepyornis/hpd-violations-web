import {OpenAllToggle, classer} from '../../src/components/OpenAllToggle';


const spyAndToggle = (status = 'ALL') => {
  let dispatch = sinon.spy();
  let toggle = shallow(<OpenAllToggle toggleStatus={status} dispatch={dispatch} />);
  return [dispatch, toggle];
};

describe('<OpenAllToggle />', ()=>{
  describe.skip('classer()', ()=>{
    it('generates correct class', ()=>{
      expect(classer('ALL','ALL')).to.eql('btn-on');
      expect(classer('OPEN', 'ALL')).to.eql('btn-off');
      expect(classer('ALL', 'OPEN')).to.eql('btn-off');
      expect(classer('OPEN', 'OPEN')).to.eql('btn-on');
    });
  });
  it('Dispatches ALL when clicked', ()=>{
    let [dispatch, toggle] = spyAndToggle();
    toggle.childAt(0).simulate('click');
    expect(dispatch.calledOnce).to.be.true;
    expect(dispatch.args[0][0]).to.eql({
      type: 'TOGGLE_OPEN_CLOSED',
      toggleStatus: 'ALL'
    });
  });

  it('Dispatches OPEN when clicked', ()=>{
    let [dispatch, toggle] = spyAndToggle();
    toggle.childAt(1).simulate('click');
    expect(dispatch.calledOnce).to.be.true;
    expect(dispatch.args[0][0]).to.eql({
      type: 'TOGGLE_OPEN_CLOSED',
      toggleStatus: 'OPEN'
    });
  });

  it('Displays correct layout', ()=>{
    var [dispatch, toggle] = spyAndToggle();
    expect(toggle.childAt(0).hasClass('btn-off')).to.eql(false);
    expect(toggle.childAt(1).hasClass('btn-off')).to.eql(true);
    var [dispatch, toggle] = spyAndToggle('OPEN');
    expect(toggle.childAt(0).hasClass('btn-off')).to.eql(true);
    expect(toggle.childAt(1).hasClass('btn-off')).to.eql(false);
  });

});
