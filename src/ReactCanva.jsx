
import { Stage, Layer, Circle, Image } from 'react-konva';
import backgroundImage from "./assets/garden.jpg";

function ReactCanva() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image src={backgroundImage} />
        <Circle x={200} y={100} radius={50} fill="red" />
        <Circle x={300} y={150} radius={50} fill="blue" />
        {/* Qolgan nuqtalar */}
      </Layer>
    </Stage>
  );
}

export default ReactCanva;
