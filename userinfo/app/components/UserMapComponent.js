var React = require('react');
import {Map, InfoWindow, Marker} from 'google-maps-react';

const UserMapComponent = (props) => {
    return (
        <Map google={window.google}
            onClick={props.onMapClicked}
            >
          <Marker onClick = {props.onMarkerClick}
                  name = {`Latitude is ${props.lat} and Longitude is ${props.lng}`} 
                  position = {{lat: props.lat, lng: props.lng}}
                  />
          <InfoWindow
            marker={props.activeMarker}
            visible={props.showingInfoWindow}>
              <div>
                <h1>{props.selectedPlace.name}</h1>
              </div>
          </InfoWindow> 
        </Map>
    )
}

export default UserMapComponent;