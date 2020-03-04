import React from "react";

import { Route, Switch } from "react-router-dom";
import Main from "../components/Main";
import Cart from "../components/Cart";
export default function() {
    return (
        <Switch>
            <Route path="/" exact render={() => <Main />} />
            <Route path="/cart" exact render={() => <Cart />} />
        </Switch>
    );
}
