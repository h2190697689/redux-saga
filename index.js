import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import store from "./store/index";

function StoreApp(){
    return <Provider store={store}>
        <App />
    </Provider>
}

ReactDOM.render(<StoreApp/>, document.getElementById("root"))