import counter from './index';

describe('reducers', () => {
  it('hey', () => {
    console.log('hey');
  })
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(counter(undefined, {})).toBe(0);
    });
    it('should handle INCREMENT', () => {
      expect(counter(10, { type: 'INCREMENT' })).toBe(11);
    });
    it('should handle DECREMENT', () => {
      expect(counter(0, { type: 'DECREMENT' })).toBe(-1);
    });
    it('should ignore unknown actions', () => {
      expect(counter(1, { type: '???' })).toBe(1);
    })
  });
});
