import React, { useState } from "react";
import Sidebar from "../sidebar";
import Header from "../header";
import VarietyList from "../varietyList";
import VarietyItem from "../variteyItem";
// import AdonisImage from "@/images/adonis.svg";
// import AndreaImage from "@/images/andrea.svg";
// import BambouImage from "@/images/bambou.svg";
// import SarnumImage from "@/images/sarnum.svg";
// import BazilletetroImage from "@/images/BAZILLERETRO.svg";
// import BoccionzImage from "@/images/Boccionz.svg";
// import BazilleImage from "@/images/basile.svg";
// import AntaresImage from "@/images/Antares.svg";
// import MuiImage from "@/images/mui.svg";
// import AdonisBottleImage from "@/images/adonisbottle.svg";
// import Image from "next/image";
// import Link from "next/link";
import AdonisImage from "@/images/adonis.svg";
import BambouImage from "@/images/bambou.svg";
import SarnumImage from "@/images/BAZILLERETRO.svg";
import BazilletetroImage from "@/images/BAZILLERETRO.svg";
import BoccionzImage from "@/images/Boccionz.svg";
import BazilleImage from "@/images/basile.svg";
import AntaresImage from "@/images/Antares.svg";
import AdonisBottleImage from "@/images/adonisbottle.svg";
import FilterComponent from "../filter";
const ParentComponent = () => {
  const [list, setList] = useState(null);
  const [selectedItem, setSelectedItem] = useState();
  const [showVarietyList, setShowVarietyList] = useState(false);
  const [itemSelectedShow, setItemSelectedShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);

  const handleListClick = (item) => {
    const selectedItemData =
      item === "Bottle"
        ? [
            { image: AdonisImage, title: "ADONIS" },
            { image: SarnumImage, title: "SARNUM" },
            { image: BazilletetroImage, title: "BazilletetroImage" },
            { image: BoccionzImage, title: "BoccionzImage" },
            { image: BazilleImage, title: "BazilleImage" },
            { image: AdonisBottleImage, title: "AdonisBottleImage" },
          ]
        : item === "Pumps"
        ? [
            { image: BambouImage, title: "BAMBOU" },
            { image: BoccionzImage, title: "BoccionzImage" },
            { image: BazilleImage, title: "BazilleImage" },
            { image: AdonisBottleImage, title: "AdonisBottleImage" },
            { image: SarnumImage, title: "SARNUM" },
          ]
        : item === "Caps"
        ? [
            { image: BazilleImage, title: "BazilleImage" },
            { image: AdonisBottleImage, title: "AdonisBottleImage" },
            { image: SarnumImage, title: "SARNUM" },
            { image: BambouImage, title: "BAMBOU" },
            { image: BoccionzImage, title: "BoccionzImage" },
          ]
        : item === "Liquid"
        ? [
            { image: SarnumImage, title: "SARNUM" },
            { image: BazilletetroImage, title: "BazilletetroImage" },
            { image: BoccionzImage, title: "BoccionzImage" },
            { image: BazilleImage, title: "BazilleImage" },
            { image: AdonisBottleImage, title: "AdonisBottleImage" },
          ]
        : item === "Decoration"
        ? [
            { image: BoccionzImage, title: "BoccionzImage" },
            { image: BazilleImage, title: "BazilleImage" },
            { image: AdonisBottleImage, title: "AdonisBottleImage" },
            { image: SarnumImage, title: "SARNUM" },
          ]
        : [];
    setList(selectedItemData);
    setShowVarietyList(true);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setItemSelectedShow(true);
  };

  const handleBackToSidebar = () => {
    setList(null);
    setShowVarietyList(false);
    setFilterShow(false);
    setItemSelectedShow(false);
  };
  const handleFilter = (item) => {
    setFilterShow(item);
  };

  return (
    <div
      className="parent-container 
    "
    >
      <Header />
      <div className="flex auto varietylistouter">
        <Sidebar onItemClick={handleListClick} onBack={handleBackToSidebar} />
        {/* {!showVarietyList && <Sidebar onItemClick={handleItemClick} />} */}
        {showVarietyList ? (
          <VarietyList
            varietyList={list}
            onItemClick={handleItemClick}
            onFilter={handleFilter}
          />
        ) : (
          ""
        )}
        {filterShow && <FilterComponent onItemClick={handleListClick} />}

        {itemSelectedShow && (
          <div className="variety-list-sec">
            <VarietyItem item={selectedItem} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
