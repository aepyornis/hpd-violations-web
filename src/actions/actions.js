export const submitAddress = (address) => {
  return {
    type: 'SUBMIT_ADDRESS',
    address: address
  };
};


/*
Address State:
{
 address: {
  houseNumber: '',
  street: '',
  boro: ''
 },


{
 geoclient: {
    status: 'IN_PROGRESS',
  }
}
{
 geoclient: {
 status: 'DONE_FOUND',
 result: {
    bbl: "012345678910",
    [other fields]?
 }

{
 status: 'DONE_NOT_FOUND',
 result: ''
}

{
 status: 'FAILED',
 result: ''
}
SEARCH_IN_PROGRESS, DONE_FOUND, DONE_NOT_FOUND, FAILED
*/
