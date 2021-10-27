const createTime = () => {
  /**
   * Format seconds into the format mm:ss
   * @param {number} seconds Seconds to format
   * @returns {string} String formatted to mm:ss
   */
  const formatSeconds = (seconds: number): string => {
    if (typeof seconds !== 'number' || seconds <= 0) return '00:00';
    seconds = Math.floor(seconds); // get rid of any decimals
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;
    return `${padZero(minutes)}:${padZero(remaining)}`;
  };

  /**
   * Nap to pad a zero to the front of so it is 2 characters long.
   * @param {number} number Number to pad
   * @returns {string} String of the two character long
   */
  function padZero(number) {
    // same number, only one digit
    if (number % 10 === number) {
      return '0' + number;
    } else {
      return number.toString();
    }
  }

  return {
    formatSeconds,
  };
};

const singleton = createTime();
Object.freeze(singleton);

export default singleton;
