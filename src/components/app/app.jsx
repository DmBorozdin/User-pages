import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Activity from "../activity/activity";
import Map from "../map/map";
import Time from "../time/time";
import NotFoundScreen from "../not-found-screen/not-fount-screen";
import { APPRoute, MenuLeftItem } from "../../const";

const App = () => {
    const [activeLeftMenu, setActiveLeftMenu] = useState(MenuLeftItem.ACTIVITY.name);
    return (
        <BrowserRouter>
            <Switch>
                <Route path = {APPRoute.MAIN} exact>
                    <Activity activeLeftMenu = {activeLeftMenu} setActiveLeftMenu = {setActiveLeftMenu}/>
                </Route>
                <Route path = {APPRoute.MAP} exact>
                    <Map activeLeftMenu = {activeLeftMenu} setActiveLeftMenu = {setActiveLeftMenu}/>
                </Route>
                <Route path = {APPRoute.TIME} exact>
                    <Time activeLeftMenu = {activeLeftMenu} setActiveLeftMenu = {setActiveLeftMenu}/>
                </Route>
                <Route>
                    <NotFoundScreen/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;