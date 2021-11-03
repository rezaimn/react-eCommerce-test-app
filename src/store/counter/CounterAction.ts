import {INCREMENT_COUNTER, DECREMENT_COUNTER} from './models/actions';
import {AppActions} from "../models/actions";

export const incrementCount = (): AppActions => {
    return {
        type: INCREMENT_COUNTER
    }
}


export const decrementCount = (): AppActions => {
    return {
        type: DECREMENT_COUNTER
    }
}
