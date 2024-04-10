import React from 'react'
import ReactDOM from 'react-dom/client'
import { ButtonPrimary } from './components/ButtonPrimary';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Databinding from './databinding/Databinding';
import HandleEvent from './handleEvent/HandleEvent';
import DemoState from './state/DemoState';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// console.log(<div></div>);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
      {/* <HomePage /> */}
      {/* <Databinding /> */}
      {/* <HandleEvent /> */}
      <DemoState />
  </div>,
)


