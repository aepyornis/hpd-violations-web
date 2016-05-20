import {OpenClosedToggle, classer} from '../../src/components/OpenClosedToggle';


const spyAndToggle = (status = 'ALL') => {
  let dispatch = sinon.spy();
  let toggle = shallow(<OpenClosedToggle toggleStatus={status} dispatch={dispatch} />);
  return [dispatch, toggle];
};

describe('<OpenClosedToggle />', ()=>{
  describe('classer()', ()=>{
    it('generates correct class', ()=>{
      expect(classer('ALL','ALL')).to.eql('btn-small btn');
      expect(classer('OPEN', 'ALL')).to.eql('btn-small btn-outline');
      expect(classer('ALL', 'OPEN')).to.eql('btn-small btn-outline');
      expect(classer('OPEN', 'OPEN')).to.eql('btn-small btn');
    });
  });
  it('Dispatchs ALL when clicked', ()=>{
    let [dispatch, toggle] = spyAndToggle();
    toggle.childAt(0).simulate('click');
    expect(dispatch.calledOnce).to.be.true;
    expect(dispatch.args[0][0]).to.eql({
      type: 'TOGGLE_OPEN_CLOSED',
      toggleStatus: 'ALL'
    });
  });

  it('Dispatchs OPEN when clicked', ()=>{
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
    expect(toggle.childAt(0).hasClass('btn-outline')).to.eql(false);
    expect(toggle.childAt(1).hasClass('btn-outline')).to.eql(true);
    var [dispatch, toggle] = spyAndToggle('OPEN');
    expect(toggle.childAt(0).hasClass('btn-outline')).to.eql(true);
    expect(toggle.childAt(1).hasClass('btn-outline')).to.eql(false);
  });

});
