import timer from './timer';

describe('timer', () => {
   it('should be off without doing anything', () => {
      expect(timer.isOn()).toBeFalsy();
   });
});