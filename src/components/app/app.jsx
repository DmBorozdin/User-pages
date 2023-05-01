import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { YMaps } from "@pbe/react-yandex-maps";
import Activity from "../activity/activity";
import Map from "../map/map";
import Time from "../time/time";
import CV from "../cv/cv";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import { APPRoute} from "../../const";

const App = () => {
    const [[h, m, s], setTime] = useState([0, 0, 0]);

    const tick = () => {
        if (m === 59 && s === 59) {
          setTime([h + 1, 0, 0]);
        } else if (s === 59) {
          setTime([h, m + 1, 0]);
        } else {
          setTime([h, m, s + 1]);
        }
      };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
      });

    return (
        <YMaps
            query={{
                apikey: "2c33021e-1504-4cca-aa7a-961ad4818c83",
                lang: "ru_RU"
            }}
        >
            <BrowserRouter>
                <Switch>
                    <Route path = {APPRoute.MAIN} exact>
                        <Activity/>
                    </Route>
                    <Route path = {APPRoute.MAP} exact>
                        <Map/>
                    </Route>
                    <Route path = {APPRoute.TIME} exact>
                        <Time hours = {h} minutes = {m} seconds = {s}/>
                    </Route>
                    <Route path = {APPRoute.CV} exact>
                        <CV/>
                    </Route>
                    <Route>
                        <NotFoundScreen/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </YMaps>   
    );
}

export default App;