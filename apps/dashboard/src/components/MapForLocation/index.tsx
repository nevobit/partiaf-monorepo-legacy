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
import { PartialStore } from "@/redux/states/stores/storesSlice";

const INITIAL_LOCATION: LatLngExpression = [4.6985467, -74.1182006];

type SetState = Dispatch<SetStateAction<PartialStore>>;

export default function MapForLocation({ setState }: { setState: SetState }) {
  const [position, setPosition] = useState<LatLngExpression>(INITIAL_LOCATION);
  const markerRef = useRef<LeafletMarker<any> | null>(null);

  const handleMapClick: LeafletMouseEventHandlerFn = ({ latlng }) => {
    setPosition(latlng);
  };

  useEffect(() => {
    setState((prev) => {
      return { ...prev, location: position };
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
      className={styles.leaflet_container}
      center={position}
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
        position={position}
      >
        <Popup>Estas aquí</Popup>
        <Tooltip>Estas aquí</Tooltip>
      </Marker>
      <MapEvents onMapClick={handleMapClick} />
      <SearchLocation />
    </MapContainer>
  );
}
