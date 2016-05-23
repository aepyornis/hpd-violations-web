import {
  InfoCard,
  formatDate,
  CloseButton,
  InfoItem,
  InfoCardContent
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

const infoCardCont = () => {
  let props = {
    violation: {
      violationclass: 'A',
      currentstatus: '',
      currentstatusdate: '',
      inspectiondate: '',
      originalcorrectbydate: '',
      novdescription: ''
    }
  };
  return shallow(<InfoCardContent {...props}/>);
};

describe('InfoCard', ()=>{
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
    it('renders closeButton', ()=> expect(infoCard().find(CloseButton)).to.have.length(1));
    it('renders InfoCardContent', ()=> expect(infoCard().find(InfoCardContent)).to.have.length(1));
    it('does not render InfoCardContent if modal is closed', ()=>{
      let c = shallow(<InfoCard />);
      expect(c.props().isOpen).to.eql(false);
      expect(c.find(CloseButton)).to.have.length(1);
      expect(c.find(InfoCardContent)).to.have.length(0);
    });
    describe('<InfoCardContent />', ()=>{
      it('renders h4', ()=> expect(infoCardCont().find('h4')).to.have.length(1));
      it('renders h5', ()=> expect(infoCardCont().find('h4')).to.have.length(1));
      it('renders 4 infoItems', ()=> expect(infoCardCont().find(InfoItem)).to.have.length(4));
      it('renders h4', ()=> expect(infoCardCont().find('h4')).to.have.length(1));
    });
  });
});
