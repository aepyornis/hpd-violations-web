import {ViolationStatus} from '../../src/components/ViolationStatus';

const componentText = (status) => shallow(<ViolationStatus status={status} />).text();

describe('ViolationStatus Component', ()=>{
  describe('<ViolationStatus />', ()=>{
    
    it('returns empty <div> if status = VIOLATION_FOUND', ()=>{
      let component = shallow(<ViolationStatus status="VIOLATION_FOUND" />);
      expect(component.html()).to.eql('<div></div>');
    });

    it('returns messages for other statuses', ()=>{
      expect(componentText('VIOLATION_NOT_FOUND')).to.not.eql('');
      expect(componentText('VIOLATION_NETWORK_ERROR')).to.not.eql('');
      expect(componentText('VIOLATION_IN_PROGRESS')).to.not.eql('');
    });
    
  });
});
