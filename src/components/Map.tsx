import { Skeleton } from "@chakra-ui/react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
interface Props {
  lat: number;
  lng: number;
}
const Map = ({ lat, lng }: Props) => {
  const apiKey = import.meta.env.VITE_MAPS_API_KEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });
  if (!isLoaded) return <Skeleton />;
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: lat, lng: lng }}
      mapContainerStyle={{ height: "50vh", width: "100%" }}
    >
      <MarkerF position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  );
};

export default Map;
