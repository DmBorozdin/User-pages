import React from "react";
import {ReactComponent as MenuLogo} from "./img/icons/menu.svg";
import {ReactComponent as LocationLogo} from "./img/icons/location.svg";
import {ReactComponent as TimeLogo} from "./img/icons/time.svg";

export const APPRoute = {
    MAIN: `/`,
    MAP: `/map`,
    TIME: `/time`,
    CV: `/cv`,
};

export const MenuLeftItem = {
  ACTIVITY: {name: 'Activity', route: APPRoute.MAIN, logo: <MenuLogo/>},
  MAP: {name: 'Map', route: APPRoute.MAP, logo: <LocationLogo/>},
  TIME: {name: 'Time', route: APPRoute.TIME, logo: <TimeLogo/>}
}