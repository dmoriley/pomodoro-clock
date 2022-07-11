// .jest/identity-obj-proxy-esm.js

// Modified identity-obj-proxy.

// This works around the fact we use ES named exports for styles, e.g.:
// import styles from './styles.scss'.
// https://github.com/keyanzhang/identity-obj-proxy/issues/8
const proxy = new Proxy(
  {},
  {
    get: function getter(target, key) {
      switch (key) {
        case '__esModule':
          return true;
        case 'default':
          // will return proxy when using 'import styles from...'
          return proxy;
        default:
          return key;
      }
    },
  }
);
module.exports = proxy;
