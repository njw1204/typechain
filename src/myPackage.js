// @ts-check

/**
 * Initialize the project
 * @param {object} config
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
  return true;
}

/**
 * Exit the project
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}
