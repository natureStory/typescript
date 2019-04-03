import * as React from "react";
import { BrowserRouter, Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import Hello from './pages/hello/hello';
import Nihao from './pages/nihao/nihao';

const BasicRoute = () => (
    <BrowserRouter>
        {/* switch保证路由匹配唯一性 */}
        <Switch>
            <Route exact path="/" component={Hello}/>
            <Route exact path="/detail" component={Nihao}/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;
