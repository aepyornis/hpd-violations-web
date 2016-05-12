import {geoclientFetch} from '../src/util/fetch';
import axios from 'axios';
import {geoclient} from '../config.js';


describe('geoClientFetch', ()=>{

  before(() => sinon.spy(axios, 'get'));
  after(() => axios.get.restore());
  
  it('calls axios.get with correct arguments', ()=>{
    geoclientFetch('123', 'Main St', 'Queens');

    let params = axios.get.args[0][1].params;
    
    expect(params.app_id).to.eql(geoclient.appid);
    expect(params.app_key).to.eql(geoclient.appkey);
    expect(params.houseNumber).to.eql('123');
    expect(params.street).to.eql('Main St');
    expect(params.borough).to.eql('Queens');

  });

});
