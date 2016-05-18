import {
  ViolationItem,
  ViolationList
} from '../../src/components/ViolationList';

describe.only('ViolationList.js', ()=>{
  describe('<ViolationItem />', ()=>{
    it('renders <li> tag', ()=>{
      let component = shallow(<ViolationItem violationclass="B" currentstatus="open" />);
      expect(component.text()).to.eql('B - open');
    });
  });

  describe('<ViolationList />', ()=>{
    
    it('renders <li> ', () =>{
      let violations = [{violationclass:"A", currentstatus: "OPEN"},{violationclass: "B", currentstatus: "CLOSED"} ];
      let c = shallow(<ViolationList violations={violations} />);
      expect(c.find('ul').render().find('li')).to.have.length(2);
    });
    
  });
});



