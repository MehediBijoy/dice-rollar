import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"

import Home from './Components/Home/Home'
import Store from "./Store/index";
import {clear_dice} from "./Store/Actions/Dice";

const App = () => {
    useEffect(()=>{Store.dispatch(clear_dice())},[])
    return (
        <Provider store={Store}>
            <div>
                <Home />
            </div>
        </Provider>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
