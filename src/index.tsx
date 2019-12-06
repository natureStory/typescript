import * as React from "react";
import * as ReactDOM from "react-dom";
import Router from './router';
import store from './redux/store';


ReactDOM.render(
    <Router store={store} />,
    document.getElementById("app")
);
