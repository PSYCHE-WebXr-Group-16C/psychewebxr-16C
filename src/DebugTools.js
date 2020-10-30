import {DEBUG_MODE} from './constants/constants';

export function printDebug(str) {
    if (DEBUG_MODE)
        console.log(str);
}