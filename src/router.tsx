import * as React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

import Hello from './pages/hello/hello';
import Nihao from './pages/nihao/nihao';

export interface Store {
    store?: object
}

const BasicRoute = <T extends Store>({ store }: T) => (
    // @ts-ignore
    <Provider store={store}>
        {/* todo: 此处根据需求修改路由的匹配特性 */}
        <BrowserRouter>
            {/* todo: 此处是路由外层的容器，如导航，侧边，头部，脚部等不变内容 */}
            Power Task！！！
            {/* switch保证路由匹配唯一性 */}
            <Switch>
                <Route exact path="/" component={Hello} />
                <Route exact path="/detail" component={Nihao}/>
            </Switch>
        </BrowserRouter>
    </Provider>
);


export default BasicRoute;
