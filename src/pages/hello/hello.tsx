import * as React from "react";
import { RouteComponentProps, Link } from 'react-router-dom';

export default class Hello extends React.Component<RouteComponentProps, null> {
    render() {
        console.log(this.props.location);
        return (
            <div>
                <h1>HHHmss hello and hello 主页!</h1>
                <Link to="/detail">详情</Link>
            </div>
        );
    }
}
