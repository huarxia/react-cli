import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import routers from '@/routers';
ReactDOM.render(
  routers,
  document.getElementById('app')
);
