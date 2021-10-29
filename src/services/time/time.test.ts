import time from './time';

describe('time', () => {
  it('should return 00:00 for bad entry', () => {
    expect(time.formatSeconds(-30)).toEqual('00:00');
    expect(time.formatSeconds('test' as any)).toEqual('00:00');
  });

  it('should format 5 seconds', () => {
    const seconds = 5;
    expect(time.formatSeconds(seconds)).toEqual('00:05');
  });

  it('should format 30 seconds', () => {
    const seconds = 30;
    expect(time.formatSeconds(seconds)).toEqual('00:30');
  });

  it('should format 60 seconds', () => {
    const seconds = 60;
    expect(time.formatSeconds(seconds)).toEqual('01:00');
  });

  it('should format 180', () => {
    const seconds = 180;
    expect(time.formatSeconds(seconds)).toEqual('03:00');
  });

  it('should format large number', () => {
    const seconds = 60 * 57 + 5;
    expect(time.formatSeconds(seconds)).toEqual('57:05');
  });
});
