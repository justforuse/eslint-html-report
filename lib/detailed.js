/**
 * @fileoverview Calls the template generator with the flag for generating multiple files set to false.
 * @author Marcelo S. Portugal <marceloquarion@gmail.com>
 */
'use strict';
import { generateTemplate } from './template-generator.js';
export { generateReport } from './template-generator.js';
//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

export function createTemplate(results) {
  return generateTemplate(results, false);
}

export default createTemplate;
