import ReactDOM from 'react-dom/client';

import React from 'react'
import App from './App'
import '../src/index.css'
// ReactDom.render( <App/>, document.querySelector("root") )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
);
