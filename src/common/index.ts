import { CommonStoreState as StoreState } from "../types/common";
import { AppContainer, AppReducer } from "./app";

const defayltState = {
    isShow: false
}

function reducer(state: StoreState = defayltState, action: any): StoreState {
    return {
        isShow: AppReducer(state, action).isShow
    };
}

export {
    reducer as CommonReducer,
    AppContainer as CommonContainer
}