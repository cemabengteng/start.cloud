import * as React from "react";


export default class CounterComponent extends React.Component<any, any> {
    render() {
        return (
            <h1>go go go</h1>
        );
    }

    componentDidCatch(error: any, info: any) {
        console.log("error " + error);
        console.log("error info " + info);
    }
} 