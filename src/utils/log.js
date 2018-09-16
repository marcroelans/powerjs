const Logger = {};
const noop = function noop() {};

['log', 'debug', 'info', 'warn', 'error'].forEach((level) => {
  Logger[level] = window.console ? window.console[level] : noop;
});

export default Logger;
