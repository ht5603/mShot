// import React from 'react';
// import ReactDOM from 'react-dom';
// import IndexCompt from '../components/Component';

// ReactDOM.render(
// <IndexCompt/>,document.getElementById('app')
// )

import React from 'react'
import ReactDOM from 'react-dom'
import IndexCompt from '../components/Component';
import { BrowserRouter, Route } from 'react-router-dom'
import Proptest from '../components/Proptest.js';
import TextDisplay from '../components/TextDisplay'

import NavBarCompt from '../components/NavBar'

// ReactDOM.render((
//   <BrowserRouter >
//    <div>
//     <Route path="/" component={IndexCompt}/>
//     <Route path="/TextDisplay" component={TextDisplay}/>
//     <Route path="/Proptest" component={Proptest}/>
//     </div>
//   </BrowserRouter>
// ),document.getElementById('app'))

ReactDOM.render((
  
    <div>
        <NavBarCompt/>
    </div>
  
),document.getElementById('navBar'))