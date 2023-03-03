import { useMapEvent } from "react-leaflet";
import type { LeafletMouseEventHandlerFn } from "leaflet";

export default function MapEvents({
  onMapClick,
}: {
  onMapClick: LeafletMouseEventHandlerFn;
}) {
  useMapEvent("click", onMapClick);

  return null;
}
