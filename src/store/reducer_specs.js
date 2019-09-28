import { expect } from 'chai';
import { getInitialState } from './reducer';

describe('Reducer - ', () => {
  describe('getInitialState', () => {
    it('should return empty country list', () => {
      const result = getInitialState();
      expect(result.hasOwnProperty('countries')).to.be.true;
      expect(result.countries.length).to.equal(0);
    });
  });
})