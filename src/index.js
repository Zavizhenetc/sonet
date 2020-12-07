import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from './redux/store.js';
import store from './redux/redux-store'; 
 


export const rerenderEntireTree =(state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        {/* <App   dispatch={store.dispatch.bind(store)}  store={store}/> */}
        <App state={state}  dispatch={store.dispatch.bind(store)}  store={store}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState());
// store.subscribe(rerenderEntireTree);

store.subscribe(()=>{
  let state = store.getState();
  
  rerenderEntireTree(state); 
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
