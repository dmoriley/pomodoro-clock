const createTimer = () => {
  let interval;
  let isOn = false;

  return {
    start: (callback, delay = 1000) => {
      isOn = true;
      interval = setInterval(callback, delay)
    },
    pause: () => {
      isOn = false;
      clearInterval(interval);
    },
    isOn: () => {
      return isOn;
    }
  };
};

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// if I wanted to make this a hook this is a good source

const singleton = createTimer();
Object.freeze(singleton);

export default singleton;