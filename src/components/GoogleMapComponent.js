import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
       

    render() {
        const styles = { "height":"16rem"};   
      return (
        <Map style={styles} google={this.props.google} zoom={11} initialCenter={{
            lat: 32.0742585,
            lng: 34.7721321
          }}>
       
          <Marker name={'Current location'} />
        </Map>
      );
    }
  }

const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
  )


export default GoogleApiWrapper(
    (props) => ({
      apiKey: "AIzaSyCo6Ra7KImx-LH9DbolfUTKHPIayVxYV7U",
      LoadingContainer: LoadingContainer
    }
  ))(MapContainer)
