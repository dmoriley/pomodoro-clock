import timer from './timer';

describe('timer', () => {
   it('should be off without doing anything', () => {
      expect(timer.isOn()).toBeFalsy();
   });

   // it('should be on after turning it on', () => {
   //    timer.start(() => {});
   //    expect(timer.isOn).toBeTruthy();
   // });

   // it('should pause correctly', () => {
   //    expect(timer.isOn()).toBeFalsy();
   //    timer.start(() => {});
   //    expect(timer.isOn).toBeTruthy();
   //    timer.pause();
   //    expect(timer.isOn()).toBeFalsy();
   // });

});