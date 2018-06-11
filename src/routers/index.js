/**
 * 路由配置
 * huaxia@huar.love
 * 2018-6-11 16:21:51
 */
import React from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router
    // HashRouter as Router
} from 'react-router-dom';

import Hello from '@/pages/hello';
const routes = (
    <Router>
        <Route exact path="/" component={Hello} />
    </Router>
);

export default routes;
