import React from "react";
import withLayout from "../../hocs/with-layout";
import { Map as YMap } from "@pbe/react-yandex-maps";
import "./map.scss"
import {ReactComponent as ChevronDownLogo} from "../../img/icons/chevron-down.svg";
import {ReactComponent as UpdateLogo} from "../../img/icons/update.svg";
import {ReactComponent as CloseLogo} from "../../img/icons/close.svg";

const Map = () => {
    return (
        <div className="map-wrap">
            <div className="map-wrap__header">
                <p>Basic map</p>
                <div className="map-wrap__tools">
                    <ChevronDownLogo className="map-wrap__tools_chevron"/>
                    <UpdateLogo/>
                    <CloseLogo/>
                </div>
            </div>
            <div className="map">
                <YMap defaultState={{ center: [55.75, 37.57], zoom: 9 }} width={'100%'} height={'auto'}></YMap>
            </div>
        </div>
    )
};

export default withLayout(Map);