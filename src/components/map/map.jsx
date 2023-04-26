import React, {useState} from "react";
import withLayout from "../../hocs/with-layout";
import { Map as YMap, Placemark } from "@pbe/react-yandex-maps";
import "./map.scss"
import {ReactComponent as ChevronDownLogo} from "../../img/icons/chevron-down.svg";
import {ReactComponent as UpdateLogo} from "../../img/icons/update.svg";
import {ReactComponent as CloseLogo} from "../../img/icons/close.svg";
import Preloader from "../preloader/preloader";

const Map = () => {
    const [loaded, setLoaded] = useState(true);
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
            {loaded && <Preloader/>}
            <div className="map" style={{display: loaded ? 'none':'block'}}>
                <YMap defaultState={{ 
                    center: [55.06, 82.9045], 
                    zoom: 16,
                    controls: ["zoomControl", "fullscreenControl"], 
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    width={'100%'} 
                    height={'auto'}
                >
                    <Placemark
                        modules={["geoObject.addon.balloon"]}
                        defaultGeometry={[55.0603, 82.9045]}
                        properties={{
                            balloonContentBody:
                            "Новосибирск, ул.Дачная 21/2",
                        }}
                        onLoad = {() => setLoaded(false)}
                    />
                </YMap>
            </div>
        </div>
    )
};

export default withLayout(Map);