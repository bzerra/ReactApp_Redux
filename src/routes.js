import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Team from './pages/Team';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/team" component={Team} />
        </Switch>
    );
}
