import {isElementOfType} from 'react-addons-test-utils';

import {
  AddressInfo, 
  SimpleMessage,
  formatAddress,
  orEmptyString,
  NotFoundMessage,
  infoContentSwitcher,
  AddressInfoOrError
} from '../src/components/AddressInfoOrError';

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
  
  describe('<AddressInfo />', ()=>{
    let addressInfo;
    before(()=> addressInfo = shallow(<AddressInfo address="A" bbl="123" />));
    
    it('Contains two <p> tags', ()=> expect(addressInfo.find('p')).to.have.length(2));

    it('contains correct text', ()=>{
      expect(addressInfo.childAt(0).text()).to.eql('A');
      expect(addressInfo.childAt(1).text()).to.eql('BBL: 123');
    });
    
  });

  describe('<Simple Message />', ()=> {
    it ('renders text', ()=>{
      let simpleMessage = shallow(<SimpleMessage text="A Simple Message"/>);
      expect(simpleMessage.text()).to.eql('A Simple Message');
    });
  });

  describe('<NotFoundMessage />', ()=> {
    let address = {'message': 'No Such Street'};
    let notFound;
    before(()=> notFound = shallow(<NotFoundMessage address={address} />));
    
    it('has two SimpleMessage elements with correct text', ()=>{
      expect(notFound.find(SimpleMessage)).to.have.length(2);
      expect(notFound.find(SimpleMessage).at(0).props().text).eql('Could not find your address in the database:');
      expect(notFound.find(SimpleMessage).at(1).props().text).eql('No Such Street');
    });
    
  });
  
  describe('infoContentSwitcher()', ()=> {
    it('returns <SimpleMessage /> for IN PROGRESS & FAILED', ()=>{
      expect(isElementOfType(infoContentSwitcher('IN_PROGRESS', {}),SimpleMessage))
        .to.eql(true);
      expect(isElementOfType(infoContentSwitcher('FAILED', {}),SimpleMessage))
        .to.eql(true);
    });
    
    it('returns <AddressInfo> for DONE_FOUND', ()=>{
      expect(isElementOfType(infoContentSwitcher('DONE_FOUND', {}), AddressInfo))
        .to.eql(true);
    });

    it('returns <NotFoundMessage> for DONE_NOT_FOUND', ()=>{
      expect(isElementOfType(infoContentSwitcher('DONE_NOT_FOUND', {}), NotFoundMessage))
        .to.eql(true);
    });
    
    it('returns <SimpleMessage /> by default', ()=>{
      expect(isElementOfType(infoContentSwitcher('HUH?', {}),SimpleMessage))
        .to.eql(true);
    });
    
  });

  describe('<AddressInfoOrError />', ()=>{
    it('contains 3 columns & one row and one AddressInfo', ()=>{
      let x = shallow(<AddressInfoOrError status={'DONE_FOUND'} address={{}} />);
      expect(x.find('.col-4')).to.have.length(3);
      expect(x.find('.row')).to.have.length(1);
      expect(x.find(AddressInfo)).to.have.length(1);
    });
    it('contains SimpleMessage if status = failed', ()=>{
      let x = shallow(<AddressInfoOrError status={'FAILED'} address={{}} />);
      expect(x.find(SimpleMessage)).to.have.length(1);
    });
  });
});
 
