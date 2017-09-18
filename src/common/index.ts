import { CommonStoreState as StoreState } from "../types/common";
import { AppContainer, AppReducer } from "./app";


function reducer(state: StoreState, action: any): StoreState {
    return {
        isShow: state.isShow,
        getIsShow: action.isShow(),
        test: AppReducer(state, action)
    }
}

export {
    reducer as CommonReducer,
    AppContainer as CommonContainer
}