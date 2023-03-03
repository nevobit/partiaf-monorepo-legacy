import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import {
  Icon,
  type LatLngExpression,
  type LeafletEventHandlerFnMap,
  type Marker as LeafletMarker,
  type LeafletMouseEventHandlerFn,
} from "leaflet";
import "leaflet/dist/leaflet.css";

import SearchLocation from "./SearchLocation";
import MapEvents from "./MapEvents";

import styles from "./mapForLocation.module.css";

import markeIcon from "../../assets/markeIcon.svg";

export interface LocationProps {
  lat: number;
  lng: number;
}

const INITIAL_LOCATION: LocationProps = {
  lat: 4.6871722714242,
  lng: -74.05391727207545,
};

interface Props {
  setState: Dispatch<SetStateAction<any>>;
  className?: string;
  state?: LocationProps;
}

export default function MapForLocation({ setState, className, state }: Props) {
  const [position, setPosition] = useState<LocationProps>(
    state ?? INITIAL_LOCATION
  );

  const markerRef = useRef<LeafletMarker<any> | null>(null);

  const handleMapClick: LeafletMouseEventHandlerFn = ({ latlng }) => {
    setPosition(latlng);
  };

  useEffect(() => {
    setState((prev: unknown) => {
      return { ...(prev as object), location: position };
    });
  }, [position]);

  const addressIcon = useMemo(
    () =>
      new Icon({
        iconUrl: markeIcon,
        iconSize: [28, 28],
      }),
    []
  );

  const eventHandlers: LeafletEventHandlerFnMap = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current?.getLatLng();
        marker && setPosition(marker);
      },
    }),
    []
  );

  return (
    <MapContainer
      className={`${styles.leaflet_container} ${className}`}
      center={[position.lat, position.lng]}
      zoom={13}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        ref={markerRef}
        icon={addressIcon}
        draggable
        eventHandlers={eventHandlers}
        position={[position.lat, position.lng]}
      >
        <Popup>Estas aquí</Popup>
        <Tooltip>Estas aquí</Tooltip>
      </Marker>
      <MapEvents onMapClick={handleMapClick} />
      <SearchLocation />
    </MapContainer>
  );
}
