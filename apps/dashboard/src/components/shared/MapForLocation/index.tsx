import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import "./index.css"
import { Icon } from 'leaflet'
import { useMemo, useRef, useState } from 'react';
import type { LatLngExpression } from 'leaflet'

export default function MapForLocation() {
    const [position, setPosition] = useState<LatLngExpression | undefined>([4.6985467, -74.1182006])
    const markerRef = useRef<null>(null)


    const skater = new Icon({
        iconUrl: "https://icons.veryicon.com/png/o/miscellaneous/icon_1/address-60.png",
        iconSize: [25, 25]
    });

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                }
            },
        }),
        [],
    )


    return <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={skater} ref={markerRef} draggable={true} eventHandlers={eventHandlers} position={position as LatLngExpression}>
            <Popup>Popup for Marker</Popup>
        </Marker>
    </MapContainer>
}