
// StoreState
export interface CommonAppStoreState {
    isShow: boolean;
    getIsShow: () => void;
}


export interface testStoreState {
    test?: any;
}

export interface CommonStoreState extends CommonAppStoreState, testStoreState { }
