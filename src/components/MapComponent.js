import React from 'react';
import {useLoadScript, GoogleMap, MarkerF} from "@react-google-maps/api";
import { useMemo } from "react";
import googleMapsKey from '../config';


export default function Home({issLocation}) {
        const {isLoaded} = useLoadScript({
            googleMapsApiKey: googleMapsKey, 
        });
        
        if (!isLoaded) return <div>Loading...</div>
        return <Map issLocation={{issLocation}}/>
    }
        
        function Map({issLocation}) {

            const center = useMemo(() => ({lat: 21, lng: 10}), [])

            const issLocationLatitude = parseInt(issLocation.issLocation["latitude"]);
            const issLocationLongitude = parseInt(issLocation.issLocation["longitude"]);

            return <GoogleMap 
            zoom={2} 
            center={center} 
            mapContainerClassName="map-container"
            >
                <MarkerF position={{lat: issLocationLatitude, lng: issLocationLongitude}}/>
            </GoogleMap>
        }
