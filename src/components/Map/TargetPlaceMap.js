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













// const Map=(props)=>{
//     console.log(props);
//     const coordinates={
//         lat:props.history.location.state.lat,
//         lng:props.history.location.state.lng,
//         };
//
//     return(
//         <GoogleMap defaultZoom={10}
//                    defaultCenter={{lat:coordinates.lat,lng:coordinates.lng,}}/>
//
//     )
// };
// const WrappedMap = withScriptjs(withGoogleMap(Map));
//
// export const TargetPlaceMap=(props)=> {
//             return(
//             <div style={{width:'100vw', height:'100vh'}}>
//                 <WrappedMap googleMapUrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
//                             loadingElement={<div style={{ height: `100%` }} />}
//                             containerElement={<div style={{ height: `400px` }} />}
//                             mapElement={<div style={{ height: `100%` }} />}
//                             props={props}/>
//             </div>
//         )
// };