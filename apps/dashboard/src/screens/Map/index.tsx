//import React, { useRef, useState } from 'react'
//import { useNavigate } from 'react-router-dom'
//import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'
//
//const defaultLocation = { lat: 45.516, lng: -73.56 }
//
//const Map = () => {
//  
//    const navigate =useNavigate();
//    const [googleApiKey, setGoogleApiKey] = useState('AIzaSyDmly_y9SO7GFnCLeawBxq4htfZWzXW7rM');
//    const [center, setCenter] =useState(defaultLocation);
//    const [location, setLocation] = useState(center);
//
//    const mapRef = useRef(null);
//    const placeRef = useRef(null);
//    const markerRef = useRef(null);
//
//    const getUserCurrentLocation = () => {
//        if (!navigator.geolocation) {
//          alert('Geolocation os not supported by this browser')
//        } else {
//          navigator.geolocation.getCurrentPosition((position) => {
//            setCenter({
//              lat: position.coords.latitude,
//              lng: position.coords.longitude,
//            })
//            setLocation({
//              lat: position.coords.latitude,
//              lng: position.coords.longitude,
//            })
//          })
//        }
//      }
//
//      const onLoad = (map: any) => {
//        mapRef.current = map
//      }
//      const onIdle = () => {
//        setLocation({
//          // lat: mapRef.current!.center.lat(),
//          // lng: mapRef.current!.center.lng(),
//          lat: defaultLocation.lat,
//          lng: defaultLocation.lng,
//        })
//      }
//
//      const onMarkerLoad = (marker: any) => {
//        markerRef.current = marker
//      }
//
//    return (
//    <div>
//          <LoadScript googleMapsApiKey={googleApiKey}>
//        <GoogleMap
//          id="smaple-map"
//          mapContainerStyle={{ height: '100%', width: '100%' }}
//          center={center}
//          zoom={15}
//          onLoad={onLoad}
//          onIdle={onIdle}
//        >
//          <div className="map-input-box">
//            <button type="button">
//              Confirm
//            </button>
//          </div>
//          <Marker position={location} onLoad={onMarkerLoad}></Marker>
//        </GoogleMap>
//      </LoadScript>
//      
//    </div>
//  )
//}
//
//export default Map

export default {}
