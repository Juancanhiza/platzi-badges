import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Pages */
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
/* Components */
import Layout from './Layout'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path='/' component={Home} />
                    <Route component={NotFound}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;