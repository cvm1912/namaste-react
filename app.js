import React from "react";
import ReactDOM from 'react-dom/client';
const rooot =  React.createElement('div',{id:"parents"},
                                [React.createElement('h1',{key: 1}, 'welcome to React'),React.createElement('h1',{key: 2}, 'Namaste React')] )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(rooot);
      