import {get} from 'axios';
import {geoclient} from '../../config.js';

/**
 * Fetches address information from the NYC geoclient API
 * @param {str|number} houseNumber
 * @param {str} street
 * @param {str} boro
 * @returns {promise} 
 */
export const geoclientFetch = (houseNumber, street, boro) => {
  return get(geoclient.proxyurl, {
    params: {
      app_id: geoclient.appid,
      app_key: geoclient.appkey,
      houseNumber: houseNumber,
      street: street,
      borough: boro
    }
  });
};
