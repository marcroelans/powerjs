export const log = (message, type) => {
  if (!window.console) {
    return;
  }

  switch (type) {
    case 'log':
      console.log(message);
      break;

    case 'warn':
      console.warn(message);
      break;

    case 'error':
      console.error(message);
      break;

    default:
      console.log(message);
      break;
  }
};
