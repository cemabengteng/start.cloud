import { CommonStoreState as StoreState } from "../types/common";
import { AppContainer, AppReducer } from "./app";


function reducer(state: StoreState, action: any): StoreState {
    return {
        isShow: AppReducer(state, action).isShow
    };
}

export {
    reducer as CommonReducer,
    AppContainer as CommonContainer
}