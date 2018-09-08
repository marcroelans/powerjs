  /**
  * get current timestamp
  *
  * @return {Number}
  */
var getTimestamp = function getTimestamp() {
  return new Date().getTime();
}

/**
  * check performance
  *
  * @param {Function} fn
  * @param {Number} counter
  */
var performanceChecks = function performanceChecks (fn, counter) {
  // Vars
  var i = 0;
  for(i; i < counter; i++) {
    var start = getTimestamp();
    fn();
    var end = getTimestamp();
    var duration = end - start;
    var result = (i+1).toString() + ' duration: ' + duration + ' s';
    console.log(result);
  }

}
