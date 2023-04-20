import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Activity from "../activity/activity";
import Map from "../map/map";
import Time from "../time/time";
import NotFoundScreen from "../not-found-screen/not-fount-screen";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = '/' exact>
                    <Activity/>
                </Route>
                <Route path = '/map' exact>
                    <Map/>
                </Route>
                <Route path = '/time' exact>
                    <Time/>
                </Route>
                <Route>
                    <NotFoundScreen/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;