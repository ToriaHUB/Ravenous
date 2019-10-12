import {GoogleMap, withGoogleMap, withScriptjs,Marker} from "react-google-maps";
import React from "react";


export const TargetPlaceMap = withScriptjs(withGoogleMap(props => {
    const coordinates={
       lat:props.history.location.state.lat,
         lng:props.history.location.state.lng,
         };
    return (
        <div style={{width:'100vw', height:'100vh'}}>
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{lat: coordinates.lat, lng: coordinates.lng}}>
            <Marker
                position={{
                    lat: coordinates.lat,
                    lng:coordinates.lng
                }}
            />
        </GoogleMap>
        </div>
)}
));






