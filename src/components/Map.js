import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./Locationinfobox";

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);
    
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === "wildfires") {
            return <LocationMarker lat={ev.geometry[0] .coordinates[1]} lng={ev.geometry[0] .coordinates[0]} 
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })

    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBdA_IjDbJxxcDIYJ7l_t0BxF1a4sZ6viE" }}
          defaultCenter={center}
          defaultZoom={zoom}
          >
            {markers}
          </GoogleMapReact>
          {locationInfo && <LocationInfoBox info={locationInfo} />}
     </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 49.05297675465482, 
        lng: -76.98174185335526},
        zoom: 6
}

export default Map