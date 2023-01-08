import React, { useEffect, useState } from 'react'
import Geocode from 'react-geocode'
import GoogleMapReact from 'google-map-react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

Geocode.setApiKey('AIzaSyDmly_y9SO7GFnCLeawBxq4htfZWzXW7rM');
Geocode.enableDebug();


const [coodinates, setCoordinates] = useState({})
const [bounds, setBounds] = useState({})

// const coodinates = {lat: 4.570868, lng: -74.297333};
// const [bounds, setBounds] = useState({ne: {}, sw:{} });

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos:any) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err:any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
        setCoordinates({lat: latitude, lng: longitude});
    })
}, [])


useEffect(() => {

}, [coodinates, bounds])

const AnyReactComponent = () => <div><i className='bx bx-map'></i></div>;



const Map = () => {
  return (
    // <GoogleMapReact 
    //     bootstrapURLKeys={{key:"AIzaSyDmly_y9SO7GFnCLeawBxq4htfZWzXW7rM"}} 
    //     defaultCenter={coodinates}
    //     center={coodinates}
    //     defaultZoom={14}
    //     margin={[50,50,50,50]}
    //     // options={}
    //     onChange={(e) => {
    //         setCoordinates({lat: e.center.lat, lng: e.center.lng});
    //         // setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
    //     }}
        // onChildClick={''}
        // >

    //         <AnyReactComponent 
    //             // lat={coodinates.lat}
    //             // lng={coodinates.lng}
            
    //         />

            
    // </GoogleMapReact>

    <div></div>
  )
}


// const WrappedMap = withScriptjs(withGoogleMap(Map));
export default Map
