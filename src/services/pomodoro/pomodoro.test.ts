import { SessionType } from '.';
import pomodoro from './pomodoro';

describe('pomodoro', () => {
  beforeEach(() => {
    pomodoro.reset();
  });

  it('should have the correct defaults', async () => {
    expect(pomodoro.getIsOn()).toBe(false);
    expect(pomodoro.getType()).toBe(SessionType.session);
    expect(pomodoro.getSessionLength()).toBe(20);
    expect(pomodoro.getBreakLength()).toBe(5);
    expect(pomodoro.getTime()).toBe(20 * 60);
  });

  describe('breakIncrement', () => {
    it('should increment', () => {
      expect(pomodoro.getIsOn()).toBeFalsy();
      expect(pomodoro.getBreakLength()).toBe(5);
      pomodoro.breakIncrement();
      expect(pomodoro.getBreakLength()).toBe(6);
    });
    it('should not increment when pomodoro is on', () => {
      expect(pomodoro.getIsOn()).toBeFalsy();
      expect(pomodoro.getBreakLength()).toBe(5);
      pomodoro.playPause();
      expect(pomodoro.getIsOn()).toBeTruthy();
      pomodoro.breakIncrement();
      expect(pomodoro.getBreakLength()).toBe(5);
    });
    it('should not increment over 60', () => {
      expect(pomodoro.getBreakLength()).toBe(5);
      for (let i = 0; i < 60 - 5; i++) {
        pomodoro.breakIncrement();
      }
      expect(pomodoro.getBreakLength()).toBe(60);
      pomodoro.breakIncrement();
      expect(pomodoro.getBreakLength()).toBe(60);
    });
  });

  describe('breakDecrement', () => {
    it('should decrement', () => {
      expect(pomodoro.getIsOn()).toBeFalsy();
      expect(pomodoro.getBreakLength()).toBe(5);
      pomodoro.breakDecrement();
      expect(pomodoro.getBreakLength()).toBe(4);
    });
    it('should not decrement when pomodoro is on', () => {
      expect(pomodoro.getIsOn()).toBeFalsy();
      expect(pomodoro.getBreakLength()).toBe(5);
      pomodoro.playPause();
      expect(pomodoro.getIsOn()).toBeTruthy();
      pomodoro.breakDecrement();
      expect(pomodoro.getBreakLength()).toBe(5);
    });
    it('should not decrement below 1', () => {
      expect(pomodoro.getBreakLength()).toBe(5);
      for (let i = 0; i < 4; i++) {
        pomodoro.breakDecrement();
      }
      expect(pomodoro.getBreakLength()).toBe(1);
      pomodoro.breakDecrement();
      expect(pomodoro.getBreakLength()).toBe(1);
    });
  });

  describe('sessionIncrement', () => {
    it('should increment', () => {
      expect(pomodoro.getIsOn()).toBeFalsy();
      expect(pomodoro.getSessionLength()).toBe(20);
      expect(pomodoro.getTime()).toBe(20 * 60);
      pomodoro.sessionIncrement();
      expect(pomodoro.getSessionLength()).toBe(21);
      expect(pomodoro.getTime()).toBe(21 * 60);
    });

    it('should not increment when pomodoro is on', () => {
      expect(pomodoro.getIsOn()).toBeFalsy();
      expect(pomodoro.getSessionLength()).toBe(20);
      expect(pomodoro.getTime()).toBe(20 * 60);
      pomodoro.playPause();
      expect(pomodoro.getIsOn()).toBeTruthy();
      pomodoro.sessionIncrement();
      expect(pomodoro.getSessionLength()).toBe(20);
      expect(pomodoro.getTime()).toBe(20 * 60);
    });

    it('should not increment over 60', () => {
      expect(pomodoro.getSessionLength()).toBe(20);
      for (let i = 0; i < 60 - 20; i++) {
        pomodoro.sessionIncrement();
      }
      expect(pomodoro.getSessionLength()).toBe(60);
      pomodoro.sessionIncrement();
      expect(pomodoro.getSessionLength()).toBe(60);
    });
  });

  describe('sessionDecrement', () => {
    it('should decrement', () => {
      expect(pomodoro.getIsOn()).toBeFalsy();
      expect(pomodoro.getSessionLength()).toBe(20);
      expect(pomodoro.getTime()).toBe(20 * 60);
      pomodoro.sessionDecrement();
      expect(pomodoro.getSessionLength()).toBe(19);
      expect(pomodoro.getTime()).toBe(19 * 60);
    });

    it('should not decrement when pomodoro is on', () => {
      expect(pomodoro.getIsOn()).toBeFalsy();
      expect(pomodoro.getSessionLength()).toBe(20);
      expect(pomodoro.getTime()).toBe(20 * 60);
      pomodoro.playPause();
      expect(pomodoro.getIsOn()).toBeTruthy();
      pomodoro.sessionDecrement();
      expect(pomodoro.getSessionLength()).toBe(20);
      expect(pomodoro.getTime()).toBe(20 * 60);
    });

    it('should not decrement less than 1', () => {
      expect(pomodoro.getSessionLength()).toBe(20);
      for (let i = 0; i < 19; i++) {
        pomodoro.sessionDecrement();
      }
      expect(pomodoro.getSessionLength()).toBe(1);
      pomodoro.sessionDecrement();
      expect(pomodoro.getSessionLength()).toBe(1);
    });
  });

  it('should reset correctly', () => {
    expect(pomodoro.getIsOn()).toBe(false);
    expect(pomodoro.getType()).toBe(SessionType.session);
    expect(pomodoro.getSessionLength()).toBe(20);
    expect(pomodoro.getBreakLength()).toBe(5);
    expect(pomodoro.getTime()).toBe(20 * 60);

    pomodoro.breakDecrement();
    pomodoro.sessionIncrement();
    pomodoro.playPause();

    expect(pomodoro.getIsOn()).toBe(true);
    expect(pomodoro.getSessionLength()).not.toBe(20);
    expect(pomodoro.getBreakLength()).not.toBe(5);
    expect(pomodoro.getTime()).not.toBe(20 * 60);

    pomodoro.reset();

    expect(pomodoro.getIsOn()).toBe(false);
    expect(pomodoro.getType()).toBe(SessionType.session);
    expect(pomodoro.getSessionLength()).toBe(20);
    expect(pomodoro.getBreakLength()).toBe(5);
    expect(pomodoro.getTime()).toBe(20 * 60);
  });

  describe('playPause', () => {
    afterEach(() => {
      jest.useRealTimers();
    });

    it('should turn on and off the pomodoro', () => {
      expect(pomodoro.getIsOn()).toBe(false);
      pomodoro.playPause();
      expect(pomodoro.getIsOn()).toBe(true);
      pomodoro.playPause();
      expect(pomodoro.getIsOn()).toBe(false);
    });

    it('should call setInterval and clearInterval', () => {
      jest.useFakeTimers();
      const setSpy = jest.spyOn(global, 'setInterval');
      const clearSpy = jest.spyOn(global, 'clearInterval');

      pomodoro.playPause();
      expect(setSpy).toHaveBeenCalled();
      expect(setSpy).toHaveBeenCalledWith(expect.any(Function), 1000);
      pomodoro.playPause();
      expect(clearSpy).toHaveBeenCalled();
      expect(clearSpy).toHaveBeenCalledWith(expect.any(Number));
    });

    it('should decrease the time on completion of one interval loop', () => {
      jest.useFakeTimers();
      expect(pomodoro.getTime()).toBe(20 * 60);

      pomodoro.playPause();
      jest.advanceTimersByTime(5000); // should have fired the call back of the setInterval 5 times

      expect(pomodoro.getTime()).toBe(20 * 60 - 5);
    });

    it('should play sound and change to break session on completion of session, then back to session', () => {
      HTMLMediaElement.prototype.play = jest.fn();
      jest.useFakeTimers();
      pomodoro.reset();
      expect(pomodoro.getTime()).toBe(20 * 60);
      expect(pomodoro.getType()).toBe(SessionType.session);
      pomodoro.playPause();

      jest.advanceTimersByTime(20 * 60 * 1000 + 1000); // + 1000 to go one interval after time reaches 0
      expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
      expect(pomodoro.getTime()).toBe(pomodoro.getBreakLength() * 60);
      expect(pomodoro.getType()).toBe(SessionType.break);

      (
        HTMLMediaElement.prototype.play as unknown as jest.SpyInstance
      ).mockClear();

      jest.advanceTimersByTime(5 * 60 * 1000 + 1000);
      expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
      expect(pomodoro.getTime()).toBe(pomodoro.getSessionLength() * 60);
      expect(pomodoro.getType()).toBe(SessionType.session);
    });
  });
});
