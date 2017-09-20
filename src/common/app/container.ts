import { AppStoreState } from "../../types";
import Appcomponent from "./component";
import { connect, Dispatch } from "react-redux";
import { ActionType, getIsShow } from "./action";

function mapStateToProps(state: AppStoreState) {
    return {
        isShow: state.common.isShow
    }
}


function mapDispatchtoProps(dispatch: Dispatch<ActionType>) {
    return {
        getIsShow: () => { dispatch(getIsShow()); }
    }
}

export default connect(null, {})(Appcomponent);