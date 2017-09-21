import { CommonAppStoreState as StoreState } from "../../types/common";
import { ActionType } from "./action";


// 默认的
const defaultStoreState: StoreState = {
    isShow: false,
}

export default function reducer(state: StoreState = defaultStoreState, action: ActionType): StoreState {
    const tmp = {
        ...state,
        isShow: false
    }
    switch (action.type) {
        case "1":
            return tmp;        
        default:
            return state;
    }
}

