import App from '../../src/containers/App';
import AddressSearch from '../../src/components/AddressSearch';
import NavBar from '../../src/components/NavBar';
import AddressInfoOrError from '../../src/components/AddressInfoOrError';
import ViolationStatus from '../../src/components/ViolationStatus';
import Violations from '../../src/containers/Violations';

describe('<App/>', () => {
  let app;
  before(() => app = shallow(<App/>));
  
  it('contains NavBar', () => expect(app.find(NavBar)).to.have.length(1));
  
  it('contains AddressInfoOrError', () => expect(app.find(AddressInfoOrError)).to.have.length(1));

  it('contains ViolationStatus', () => expect(app.find(ViolationStatus)).to.have.length(1));

  it('contains Violations', () => expect(app.find(Violations)).to.have.length(1));

});
