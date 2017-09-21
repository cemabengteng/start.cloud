import * as React from "react";
import { GridList, GridTile } from 'material-ui/GridList';

export default class GridImgComponent extends React.Component<any, any>{

    render() {
        return (
            <div>
                <h1>gird img</h1>
                {this.props.children}
            </div>
        );
    }
}