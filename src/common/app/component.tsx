import * as React from 'react';


interface ComponentProps {
    isShow: boolean,
    getIsShow: () => boolean;
}



export default class Component extends React.Component<ComponentProps, any>{
    render() {
        return (
            <div>
                <h3>hello man i am app Component!!</h3>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}