import {get} from 'axios';
import {geoclient} from '../../config.js';

const API_URL = 'https://api.cityofnewyork.us/geoclient/v1/address.json';

// number/str, str, str -> promise
export const geoclientFetch = (houseNumber, street, boro) => {
  return get(API_URL, {
    params: {
      app_id: geoclient.appid,
      app_key: geoclient.appkey,
      houseNumber: houseNumber,
      street: street,
      borough: boro
    }
  });
}


/**
https://api.cityofnewyork.us/geoclient/v1/address.json?app_id=f1c2a6e4&app_key=97086022e4ad2e532ebb07734d5b1ff0&houseNumber=199&street=Lee+Avenue&borough=Brooklyn"
*/
