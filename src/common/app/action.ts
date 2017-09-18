
export interface Type1 {
    type: string;
}


export interface Type2 {

}

export function getIsShow(): Type1 {
    return {
        type: '1'
    }
}


export type ActionType = Type1 | Type2;