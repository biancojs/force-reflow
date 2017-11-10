import domToArray from 'bianco.dom-to-array'

/**
 * Force the reflow of one or a list of DOM elements
 * @param   { HTMLElement|NodeList|Array } el - single or multiple DOM elements
 * @returns {*} - the argument received
 * @example
 * import forceReflow from 'bianco.force-reflow'
 *
 * // force reflow on a list of elements
 * forceReflow(document.querySelectorAll('.list'))
 *
 * // force reflow on a single element
 * forceReflow(document.querySelector('.post'))
 */
export default function forceReflow (el) {
  return domToArray(el).map(el => el.scrollTop) && el
}