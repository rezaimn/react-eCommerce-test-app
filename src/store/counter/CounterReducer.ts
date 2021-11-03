import {INCREMENT_COUNTER, DECREMENT_COUNTER, CounterActionTypes} from './models/actions';

import {Counter} from "./models/Counter";
import {Action, Reducer} from "redux";

const initializeState: Counter = {
    count: 0
}

export const counterReducer: Reducer<Counter, Action> = (state = initializeState, action: CounterActionTypes) => {
    const newState = {
        count: state.count
    }
    switch (action.type) {
        case INCREMENT_COUNTER: {
            newState.count = state.count + 1;
            return newState;
        }

        case DECREMENT_COUNTER: {
            newState.count = state.count - 1;
            return newState;
        }
        default:
            return state;
    }
}
