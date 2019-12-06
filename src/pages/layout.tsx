import * as React from "react";

interface Props {
    children: any
}

export default class Layout extends React.PureComponent<Props, null>{
    render() {
        console.log(this.props);
        debugger
        return <div>布局 {this.props.children}</div>
    }
}
