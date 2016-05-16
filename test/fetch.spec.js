import {geoclientFetch, violationsFetch} from '../src/util/fetch';
import axios from 'axios';
import {geoclient, violations} from '../config.js';

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

describe('violationsFetch', () =>{
  
  describe('generates correct urls for axios', ()=>{
    before(() => sinon.spy(axios, 'get'));
    after(() => axios.get.restore());
    
    it(' "all" is default type ', ()=>{
      let correctUrl = violations.url + 'bbl/0123456789/all';
      violationsFetch('0123456789');
      expect(axios.get.calledWith(correctUrl)).to.be.true;
     });
    
    it('sets "open" as param is default type ', ()=>{
      let correctUrl = violations.url + 'bbl/0123456789/open';
      violationsFetch('0123456789', 'open');
      expect(axios.get.calledWith(correctUrl)).to.be.true;
    });
    
  });

  // This test REQUIRES the hpd-violations-server to be running
  // New data could possible change these results
  describe('api call', () =>{
    describe('has all violations: 3023500026', ()=>{
      let response;
      before( done => violationsFetch('3023500026').then( r => {
            response = r;
            done();
      }));
      it('returns all violations for 3023500026', ()=>{
         expect(response.data).to.have.length(9);
      });

    });

    describe('has open violations: 3023500026', ()=>{
      let response;
      before( done => violationsFetch('3023500026', 'open').then( r => {
            response = r;
            done();
      }));
      it('returns open violations for 3023500026', ()=>{
        expect(response.data).to.have.length(2);
      });

    });

    describe('has no violations: 3022260001', ()=>{
      let response;
      before( done => violationsFetch('3022260001').then( r => {
          response = r;
          done();
      }));
      
      it('returns correct error message', ()=>{
        expect(response.data).to.be.a('Object');
        expect(response.data.error).to.eql(0);
        expect(response.data.message).to.be.a('String');
      });
    });
  });
 
});
