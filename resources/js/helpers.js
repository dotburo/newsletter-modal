
/**
 * Make array from node list.
 * @param nodeList
 * @return {Element|Node[]}
 */
export const nodeListArray = nodeList => {
    nodeList = typeof nodeList === 'string' ? document.querySelectorAll(nodeList) : nodeList;
    return Array.prototype.slice.call(nodeList);
};

/**
 * Find the parent element of a HTML element.
 * @param {HTMLElement} el
 * @param {String} selector
 * @return {Element|null}
 */
export const getParentElement = (el, selector) => {
    el = el.parentElement;
    while (el) {
        if (el.matches.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
};
