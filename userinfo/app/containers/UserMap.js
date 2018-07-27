import {GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import UserMapComponent from '../components/UserMapComponent';

//note: code formatted for ES6 here
export class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.lat =  37.778519;
        this.lng =  -122.405640;
    }
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
  
    render() {
      const props = {
        ...this.state,
        onMapClicked: this.onMapClicked,
        onMarkerClick: this.onMarkerClick,
        lat : this.lat,
        lng : this.lng
      }  
      return (
          <UserMapComponent
             {...props}
          />
      )
    }
  }
  export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
  })(MapContainer)