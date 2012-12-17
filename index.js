/*!
 * cell-ev :: cross-browser dom event binding
 * Copyright(c) 2012 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

/**
 * ### .bind (element, event, handle)
 *
 * Add a handler as listener for event on
 * element. If planning to `.unbind()`, the
 * handler should not be defined inline.
 *
 * ```js
 * var ev = require('cell-ev');
 *
 * function domReady (e) {
 *   // boot application, etc
 * }
 *
 * ev.bind(window, 'ready', domReady);
 * ```
 *
 * @param {Node} DOM element
 * @param {String} event
 * @param {Function} handler
 * @ api public
 */

exports.bind = (function () {
  var fn;

  if (window.addEventListener) {
    fn = function (el, ev, fn) {
      el.addEventListener(ev, fn);
    };
  } else if (window.attachEvent) {
    fn = function (el, ev, fn) {
      el.attachEvent('on' + ev, fn);
    };
  } else {
    fn = function (el, ev, fn) {
      el['on' + ev] = fn;
    };
  }

  return fn;
})();

/**
 * ### .unbind (element, event, handle)
 *
 * Remove a handler for event that was previously
 * bound to an element. Arguments must be passed
 * the same as when `.bind()`.
 *
 * ```js
 * ev.unbind(window, 'ready', domReady);
 * ```
 *
 * @param {Node} DOM element
 * @param {String} event
 * @param {Function} handler
 * @ api public
 */

exports.unbind = (function () {
  var fn;

  if (window.addEventListener) {
    fn = function (el, ev, fn) {
      el.removeEventListener(ev, fn);
    };
  } else if (window.attachEvent) {
    fn = function (el, ev, fn) {
      el.detachEvent('on' + ev, fn);
    };
  } else {
    fn = function (el, ev, fn) {
      el['on' + ev] = null;
    };
  }

  return fn;
})();
