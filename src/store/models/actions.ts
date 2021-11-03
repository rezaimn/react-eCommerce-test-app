import {CounterActionTypes} from "../counter/models/actions";
import {UserActionTypes} from "../user/models/actions";

export type AppActions  = CounterActionTypes | UserActionTypes;
