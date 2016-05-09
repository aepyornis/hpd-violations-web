import App from '../src/components/App';

describe('<App/>', () => {
  it('renders h1', () => {
    const app = shallow(<App/>);
    expect(app.find('h1')).to.have.length(1);
  });
});

