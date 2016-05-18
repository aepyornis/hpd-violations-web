import {ViolationStatus, hide} from '../../src/components/ViolationStatus';

const componentText = (status) => shallow(<ViolationStatus violationStatus={status} geoclientStatus="DONE_FOUND" />).text();

describe('ViolationStatus Component', ()=>{
  describe('<ViolationStatus />', ()=>{
    
    it('returns empty <div> if status = VIOLATION_FOUND', ()=>{
      let component = shallow(<ViolationStatus violationStatus="VIOLATION_FOUND" geoclientStatus="DONE_FOUND" />);
      expect(component.html()).to.eql('<div></div>');
    });

    it('returns empty <div> if status = INIT', ()=>{
      let component = shallow(<ViolationStatus violationStatus="INIT" geoclientStatus="DONE_FOUND" />);
      expect(component.html()).to.eql('<div></div>');
    });

    it('returns messages for other statuses', ()=>{
      expect(componentText('VIOLATION_NOT_FOUND')).to.not.eql('');
      expect(componentText('VIOLATION_NETWORK_ERROR')).to.not.eql('');
      expect(componentText('VIOLATION_IN_PROGRESS')).to.not.eql('');
    });
    
    it('triggers getViolations Action when geoclient status = DONE_FOUND', ()=>{
      
    });
     
  });

  describe('hide()', ()=>{
    
    it('returns true if geoclient status is anything but DONE_FOUND', ()=>{
      expect(hide({geoclientStatus: "DONE_NOT_FOUND"})).to.eql(true);
    });

    it('returns true if geoclient status is DONE_FOUND and violationStatus is VIOLATION_FOUND', ()=>{
      let p = {geoclientStatus: 'DONE_FOUND', violationStatus: 'VIOLATION_FOUND'};
      expect(hide(p)).to.eql(true);
    });

    it('returns false if geoclient is DONE_FOUND and violationStatius is anything else', ()=> {
      let p = {geoclientStatus: 'DONE_FOUND', violationStatus: 'IN_PROGRESS'};
      expect(hide(p)).to.eql(false);
    });
  });
});
