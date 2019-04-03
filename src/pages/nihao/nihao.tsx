import * as React from "react";
import { RouteComponentProps, Link } from 'react-router-dom';

export default class Nihao extends React.Component<RouteComponentProps, null> {
    render() {
        return (
            <div>
                <h1>HHHmss 详情页 and 你好你好!</h1>
                <Link to="/">主页</Link>
            </div>
        );
    }
}
