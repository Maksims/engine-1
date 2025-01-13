import { ORIENTATION_HORIZONTAL } from '../../../scene/constants.js';

class ScrollbarComponentData {
    enabled = true;

    orientation = ORIENTATION_HORIZONTAL;

    value = 0;

    /** @type {number} */
    handleSize = 0;

    /** @type {import('../../../framework/entity').Entity} */
    handleEntity = null;
}

export { ScrollbarComponentData };
