import React from 'react';
import locationName from '../utils/locationName'


describe('check Location function ', () => {
  test('when give true ,should return Splyt (London)', () => {
    
      let result =locationName(true);
      expect(result).toEqual('Splyt (London)');
    
  })
  test('when give false,should return Splyt Singapore Pte. Ltd', () => {
   
    let result =locationName(false);
    expect(result).toEqual('Splyt Singapore Pte. Ltd');

})
})



