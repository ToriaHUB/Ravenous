// import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import React from "react";


// Map(){
//     return(
//         <GoogleMap defaultZoom={10}
//                    defaultCenter={{lat:this.props.business.lat,lng:this.props.business.lng,}}/>
//     )
// }
// const WrappedMap = withScriptjs(withGoogleMap(this.Map.bind(this)))

export class TargetPlaceMap extends React.Component{
    render(){
        const coordinates={
            lat:this.props.history.location.state.lat,
            lng:this.props.history.location.state.lng,
        };

        return(
            <div>
            {coordinates.lat}
            {coordinates.lng}
            </div>

        )
    }
}