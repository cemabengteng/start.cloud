import { CommonStoreState as StoreState } from "../types/common";
import Appcontainer from "./app/container";


function reducer(state: StoreState, action: any): StoreState {
    return {
        isShow: state.isShow,
        getIsShow: action.isShow()
    }
}

export {
    reducer as CommonReducer,
    Appcontainer as CommonContainer
}