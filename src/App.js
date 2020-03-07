import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Routes from "./route/Routes";
import cartStore from "./store/cartStore";
cartStore.subscribe(() => console.log(cartStore.getState()));
function App() {
    return (
        <BrowserRouter>
            <Provider store={cartStore}>
                <div className="App">
                    <Header />
                    <Routes />
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
