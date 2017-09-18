import { CommonAppStoreState as StoreState } from "../../types/common";
import { ActionType } from "./action";


// 默认的
const defaultStoreState: StoreState = {
    isShow: false,
    getIsShow: () => { return false }
}

export default function reducer(state: StoreState = defaultStoreState, action: ActionType): StoreState {
    const tmp = {
        isShow: state.isShow,
        getIsShow: () => { return false }
    }
    switch (action.type) {
        case "1":
            break;
        default:
            break;
    }

    return tmp;
}

