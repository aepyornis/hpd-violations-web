import {isElementOfType} from 'react-addons-test-utils';

import {
  BblInfo, 
  SimpleMessage,
  formatAddress,
  orEmptyString,
  infoContentSwitcher,
  AddressInfoOrError
} from '../../src/components/AddressInfoOrError';

describe('components/AddressInfoOrError', () => {
  
  describe('orEmptyString', () =>{
    it('returns empty string if undefined', ()=>{
      expect(orEmptyString('hi')).to.eql('hi');
      expect(orEmptyString(undefined)).to.eql('');
    });
  });

  describe('formatAddress()', ()=>{
    it('Concats fields to create an address field', ()=>{
      let a = {
        houseNumber: '12',
        firstStreetNameNormalized: 'Main',
        zipCode: '12345'
      };
      expect(formatAddress(a)).to.eql('12 Main, 12345');
    });
    
  });
  
  describe('<BblInfo />', ()=>{
    
    it('Contains one <p> tags', ()=> {
      let bblInfo = shallow(<BblInfo bbl="123" />);
      expect(bblInfo.find('p')).to.have.length(1);
    });

    it('contains correct text', ()=>{
      let bblInfo = shallow(<BblInfo bbl="123" />);
      expect(bblInfo.find('p').text()).to.eql('BBL: 123');
    });
    
  });

  describe('<Simple Message />', ()=> {
    it ('renders text', ()=>{
      let simpleMessage = shallow(<SimpleMessage text="A Simple Message"/>);
      expect(simpleMessage.text()).to.eql('A Simple Message');
    });
  });
  
  describe('infoContentSwitcher()', ()=> {
    
    it('returns <SimpleMessage /> for INIT', () => {
      expect(isElementOfType(infoContentSwitcher('INIT', {}), SimpleMessage))
        .to.eql(true);
      expect(shallow(infoContentSwitcher('INIT', {})).text())
        .to.eql('Type in an address to search!');
    });
    
    it('returns <SimpleMessage /> for FORGOT TO SELECT BORO', () => {
      expect(isElementOfType(infoContentSwitcher('FORGOT_TO_SELECT_BORO', {}), SimpleMessage))
        .to.eql(true);
      expect(shallow(infoContentSwitcher('FORGOT_TO_SELECT_BORO', {})).text())
        .to.eql("Don't forget to select the Borough");
    });
    
    it('returns <SimpleMessage /> for IN PROGRESS & FAILED', ()=>{
      expect(isElementOfType(infoContentSwitcher('IN_PROGRESS', {}),SimpleMessage))
        .to.eql(true);
      expect(isElementOfType(infoContentSwitcher('FAILED', {}),SimpleMessage))
        .to.eql(true);
    });
    
    it('returns <BblInfo> for DONE_FOUND', ()=>{
      expect(isElementOfType(infoContentSwitcher('DONE_FOUND', {}), BblInfo))
        .to.eql(true);
    });

    it('returns <SimpleMessage> for DONE_NOT_FOUND', ()=>{
      expect(isElementOfType(infoContentSwitcher('DONE_NOT_FOUND', {}), SimpleMessage))
        .to.eql(true);
    });
    
    it('returns <SimpleMessage /> by default', ()=>{
      expect(isElementOfType(infoContentSwitcher('HUH?', {}),SimpleMessage))
        .to.eql(true);
    });
    
  });

  describe('<AddressInfoOrError />', ()=>{
    it('contains 3 columns & one row and one AddressInfo', ()=>{
      let x = shallow(<AddressInfoOrError status={'DONE_FOUND'} result={[]} />);
      expect(x.find('#info-container')).to.have.length(1);
      expect(x.find(BblInfo)).to.have.length(1);
    });
    
it('contains SimpleMessage if status = failed', ()=>{
      let x = shallow(<AddressInfoOrError status={'FAILED'} />);
      expect(x.find(SimpleMessage)).to.have.length(1);
    });
  });
});
 
