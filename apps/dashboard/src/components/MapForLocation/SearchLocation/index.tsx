import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from 'leaflet';
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

export default function SearchLocation() {
    const map = useMap()

    useEffect(() => {
        (L as any).Control.geocoder({
            defaultMarkGeocode: false
        }).on('markgeocode', function (e: any) {
            var bbox = e.geocode.bbox;
            var poly = L.polygon([
                bbox.getSouthEast(),
                bbox.getNorthEast(),
                bbox.getNorthWest(),
                bbox.getSouthWest()
            ], { color: '#85CDFD' }).addTo(map);
            map.fitBounds(poly.getBounds());
        }).addTo(map);
    }, [])

    return null
}