import {
  ViolationItem,
  ViolationList
} from '../../src/components/ViolationList';

describe('ViolationList.js', ()=>{
  describe('<ViolationItem />', ()=>{
    it('renders <li> tag', ()=>{
      let component = shallow(<ViolationItem violationclass="B" currentstatus="open" />);
      expect(component.text()).to.eql('B: (open) - ');
    });
});

const violationList = () => {
    let dispatch = sinon.spy();
    let violations = [{violationclass:"A", currentstatus: "OPEN"},{violationclass: "B", currentstatus: "CLOSED"} ];
    return [shallow(<ViolationList violations={violations} dispatch={dispatch}/>), dispatch];
 };


  describe('<ViolationList />', ()=>{
    it('renders 2 <li> ', () => expect(violationList()[0].find('ul').render().find('li')).to.have.length(2));
    
    it('clicking on li triggers TOGGLE_INFO_CARD action', ()=>{
      let [c, dispatch] = violationList();
      c.find('ul').childAt(0).shallow().simulate('click');
      expect(dispatch.calledOnce).to.eql(true);
      expect(dispatch.args[0][0]).to.eql({type:'TOGGLE_INFO_CARD', infoCard: 0});
      c.find('ul').childAt(1).shallow().simulate('click');
      expect(dispatch.calledTwice).to.eql(true);
      expect(dispatch.args[1][0]).to.eql({type:'TOGGLE_INFO_CARD', infoCard: 1});
    });
    
  });
});



