import backgroundImage from "./assets/garden.jpg";
import img from "./assets/img.jfif";
import { useState, useRef, useEffect } from "react";

const WithoutLibrary = () => {
  const [selectedTree, setSelectedTree] = useState(null);
  const imgRef = useRef(null);
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

  const trees = [
    { id: 1, x: 50, y: 30, info: "Daraxt 1 haqida ma'lumot" }, // 50% width, 30% height
    { id: 2, x: 75, y: 40, info: "Daraxt 2 haqida ma'lumot" }, // 75% width, 40% height
    { id: 3, x: 60, y: 60, info: "Daraxt 3 haqida ma'lumot" }, // 60% width, 60% height
    // Qolgan daraxtlarni shu tarzda kiriting
  ];

  useEffect(() => {
    const imgElement = imgRef.current;
    console.dir(imgElement);

    if (imgElement) {
      setImgDimensions({
        width: imgElement.naturalWidth,
        height: imgElement.naturalHeight,
      });
    }
  }, []);
  console.log(imgDimensions);

  const handleTreeClick = (tree) => {
    setSelectedTree(tree);
  };
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "1000px",
          // height: "100px",
          border: "3px solid blue",
          margin: "0 auto",
        }}
      >
        <img
          ref={imgRef}
          src={backgroundImage}
          alt="Map"
          style={{ width: "100%", objectFit: "contain" }}
        />
        {trees.map((tree) => (
          <div
            key={tree.id}
            onClick={() => handleTreeClick(tree)}
            style={{
              position: "absolute",
              left: `${tree.x}%`,
              top: `${tree.y + 2}%`,
              // width: "15px",
              // height: "15px",
              // backgroundColor: "rgba(0, 255, 0, 0.6)",
              borderRadius: "50%",
              cursor: "pointer",
              transform: "translate(-50%, -50%)",
            }}
          >🎄</div>
        ))}
        {selectedTree && (
          <div
            style={{
              position: "absolute",
              left: `${selectedTree.x}%`,
              top: `${selectedTree.y}%`,
              padding: "5px",
              backgroundColor: "white",
              border: "1px solid black",
              borderRadius: "5px",
              transform: "translate(-50%, -100%)",
              width: "130px"
            }}
          >
            <div style={{display: "flex", flexDirection: "column"}}>
              <img width={"100%"} src={img} alt="" />
              {selectedTree.info}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WithoutLibrary;
