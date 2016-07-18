import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import ColorBoxes from './pages/ColorBoxes.jsx';
import FakeChat from './pages/FakeChat.jsx';
import Index from './pages/Index.jsx';
import Layout from './pages/Layout.jsx';

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="ColorBoxes" component={ColorBoxes}></Route>
      <Route path="FakeChat" component={FakeChat}></Route>
    </Route>
  </Router>,
app);
