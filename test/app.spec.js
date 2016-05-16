import App from '../src/containers/App';
import AddressSearch from '../src/components/AddressSearch';
import Info from '../src/containers/Info.js';

describe('<App/>', () => {
  let app;
  before(() => app = shallow(<App/>));
  
  it('contains AddressSearch', () => {
    expect(app.find(AddressSearch)).to.have.length(1);
  });

  it('contains Info', () => {
    expect(app.find(Info)).to.have.length(1);
  });
});
