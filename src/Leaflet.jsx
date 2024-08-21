
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import img from "./assets/img.jfif";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mapImage from './assets/tree.svg';

function Leaflet() {

  const icon = L.icon({ iconUrl: "https://cdn-icons-png.flaticon.com/512/489/489969.png", iconSize: [50, 55], });
  const bounds = [[0, 0], [1000, 1000]]; 

  const trees = [
    { id: 1, position: [200, 300], info: "Daraxt 1 haqida ma'lumot" },
    { id: 2, position: [600, 400], info: "Daraxt 2 haqida ma'lumot" },
    { id: 3, position: [500, 600], info: "Daraxt 3 haqida ma'lumot" },
    { id: 4, position: [200, 400], info: "Daraxt 4 haqida ma'lumot" },
    { id: 5, position: [250, 350], info: "Daraxt 5 haqida ma'lumot" },
    { id: 6, position: [400, 500], info: "Daraxt 6 haqida ma'lumot" },
    { id: 7, position: [450, 550], info: "Daraxt 7 haqida ma'lumot" },
    { id: 8, position: [480, 350], info: "Daraxt 8 haqida ma'lumot" },
    { id: 9, position: [400, 200], info: "Daraxt 9 haqida ma'lumot" },
  ];

  return (
    <MapContainer
      center={[500, 500]} 
      zoom={1} 
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "90dvw" }}
      crs={L.CRS.Simple} 
    >
      <ImageOverlay
        url={mapImage}
        bounds={bounds}
      />
      {trees.map((tree) => (
        <Marker icon={icon} key={tree.id} position={tree.position}>
          <Popup>
            <div>
            <img width={"100%"} src={img} alt="" />
            {tree.info}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Leaflet;
