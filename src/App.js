import React from "react";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Main from "./components/Main";

import cartStore from "./store/cartStore";
cartStore.subscribe(() => {
    console.log(cartStore.getState());
})
function App() {
    return (
        <Provider store={cartStore}>
            <div className="App">
                <Header />
                <Main />
            </div>
        </Provider>
    );
}

export default App;
