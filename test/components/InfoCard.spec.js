import {
  InfoCard,
  formatDate,
  CloseButton,
  InfoItem,
} from '../../src/components/InfoCard';
import Modal from 'react-modal';

const infoCard = () => {
  let props = {
    violation: {
      violationclass: 'A',
      currentstatus: '',
      currentstatusdate: '',
      inspectiondate: '',
      originalcorrectbydate: '',
      novdescription: ''
    },
    open: true
  };
  return shallow(<InfoCard {...props}/>);
};

describe('<InfoCard />', ()=>{
  describe('formatDate()', ()=>{
    it('removes timestamp', ()=>{
      expect(formatDate("2015-02-17T00:00:00.000Z")).to.eql('2015-02-17');
    });
  });
  describe('<CloseButton />', ()=>{
    it('contain img tag', ()=>{
      let button = shallow(<CloseButton closeEvent={()=>{}}/>);
      expect(button.find('img')).to.have.length(1);
    });
    it('calls closeEvent when clicked', ()=>{
      let spy = sinon.spy();
      let button = shallow(<CloseButton closeEvent={()=> spy()} />);
      button.simulate('click');
      expect(spy.calledOnce).to.eql(true);
    });

  });
  describe('<InfoItem />', ()=>{
    it('renders <p> tag with text', ()=>{
      let infoItem = shallow(<InfoItem title="foo" info="bar" />);
      expect(infoItem.find('p')).to.have.length(1);
      expect(infoItem.text()).to.eql('foo: bar');
    });
  });
  describe('<InfoCard />', ()=>{
    it('renders modals', ()=>expect(infoCard().find(Modal)).to.have.length(1));
    it('renders h4', ()=> expect(infoCard().find('h4')).to.have.length(1));
    it('renders 5 infoItems', ()=> expect(infoCard().find(InfoItem)).to.have.length(5));
    it('renders h4', ()=> expect(infoCard().find('h4')).to.have.length(1));
    it('renders closeButton', ()=> expect(infoCard().find(CloseButton)).to.have.length(1));
  });
});
