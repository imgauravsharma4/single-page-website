import React from "react";
import Image from "next/image";
import "../../app/globals.css";

const VarietyItem = ({ item }) => {
  console.log("varityItem", item);
  const Volume = [
    { value: "15ML" },
    { value: "30ML" },
    { value: "50ML" },
    { value: "75ML" },
    { value: "100ML" },
    { value: "200ML" },
  ];
  return (
    <div className="main-cont">
      <div className="top-volume">
        <div className="top-volume-inner">
          <h4>VOLUME</h4>
          {Volume?.map((item, index) => (
            <div className="value-tag" key={index}>
              {item.value}
            </div>
          ))}

          <div className="value-tag">{item?.title}</div>
        </div>
      </div>
      <div className="image-view" style={{ paddingTop: "50px" }}>
        <Image src={item?.image} alt={""} width={400} height={400} />
      </div>
    </div>
  );
};

export default VarietyItem;
