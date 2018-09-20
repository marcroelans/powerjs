/**
  * wrapper object
  * @private
  * @type {Object}
  */
const Logger = {};

/**
  * no operation function
  * @private
  * @param {Function}
  */
const noop = () => {};

['log', 'debug', 'info', 'warn', 'error'].forEach((level) => {
  Logger[level] = window.console ? window.console[level] : noop;
});

export default Logger;
