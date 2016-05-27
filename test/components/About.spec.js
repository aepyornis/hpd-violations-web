import { About } from '../../src/components/About';

describe('<About />', ()=>{

  it('renders app content if open', ()=>{
    let content = <p>CONTENT</p>;
    let about = shallow(<About isOpen={true} appContent={content} />);
    expect(about.children().html()).to.eql('<p>CONTENT</p>');
  });

  it('renders app content if closed', ()=>{
    let content = <p>CONTENT</p>;
    let about = shallow(<About isOpen={false} appContent={content} />);
    expect(about.children().html()).to.eql('<p>CONTENT</p>');
  });

});
