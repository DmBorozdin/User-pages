import React, {useState, useRef} from "react";
import withLayout from "../../hocs/with-layout";
import { Map as YMap, Placemark } from "@pbe/react-yandex-maps";
import "./map.scss"
import {ReactComponent as ChevronDownLogo} from "../../img/icons/chevron-down.svg";
import {ReactComponent as UpdateLogo} from "../../img/icons/update.svg";
import {ReactComponent as CloseLogo} from "../../img/icons/close.svg";
import Preloader from "../preloader/preloader";

const Map = () => {
    const [loaded, setLoaded] = useState(true);
    const defaultMapState = { 
        center: [55.06, 82.9045], 
        zoom: 16,
        controls: ["zoomControl", "fullscreenControl"], 
    };
    const [showMap, setShowMap] = useState(true);
    const mapRef = useRef(null);
    const handleReset = () => {
        mapRef.current.setCenter(defaultMapState.center);
        mapRef.current.setZoom(defaultMapState.zoom);
    }

    return (
        <div className="map-wrap">
            <div className={`map-wrap__header ${!showMap ? 'map-wrap__header_map-hiden':''}`}>
                <p>Basic map</p>
                <div className="map-wrap__tools">
                    <ChevronDownLogo className={`map-wrap__tools_chevron ${!showMap ? 'map-wrap__tools_map-hiden':''}`} onClick={() => setShowMap(!showMap)}/>
                    <UpdateLogo onClick={handleReset}/>
                    <CloseLogo/>
                </div>
            </div>
            {loaded && <Preloader/>}
            <div className={`map ${loaded || !showMap ? 'map_hiden':''}`}>
                <YMap 
                    defaultState={defaultMapState}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    width={'100%'} 
                    height={'auto'}
                    onLoad = {() => setLoaded(false)}
                    instanceRef={mapRef}
                >
                    <Placemark
                        modules={["geoObject.addon.balloon"]}
                        defaultGeometry={[55.0603, 82.9045]}
                        properties={{
                            balloonContentBody:
                            "Новосибирск, ул.Дачная 21/2",
                        }}
                    />
                </YMap>
            </div>
        </div>
    )
};

export default React.memo(withLayout(Map), (prevProps, nextProps) => {
    return prevProps.activeLeftMenu === nextProps.activeLeftMenu;
});