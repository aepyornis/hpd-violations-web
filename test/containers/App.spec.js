import App from '../../src/containers/App';
import AddressSearch from '../../src/components/AddressSearch';
import NavBar from '../../src/components/NavBar';
import About from '../../src/components/About';

describe('<App/>', () => {
  let app;
  before(() => app = shallow(<App/>));
  
  it('contains NavBar', () => expect(app.find(NavBar)).to.have.length(1));

  it('contains About', () => expect(app.find(About)).to.have.length(1));
  
});
