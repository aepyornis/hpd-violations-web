import {get} from 'axios';

/**
 * Fetches BBL from geocode.nycdb.info
 * @param {str|number} houseNumber
 * @param {str} street
 * @param {str} boro
 * @returns {promise} 
 */
export const geocodeFetch = (houseNumber, street, boro) => {
  return get('https://geocode.nycdb.info', {
    params: {
      house: houseNumber,
      street: street,
      boro: boro
    }
  });
}

/**
 * Fetches violations from api.nycdb.info
 * @param {str} bbl
 * @returns {promise} 
 */
export const violationsFetch = bbl => {
  return get('https://api.nycdb.info/hpd_all_violations', {
    params: {
      bbl: `eq.${bbl}`
    }
  });
};
