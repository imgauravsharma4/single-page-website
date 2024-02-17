import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import Header from "../header";
import VarietyList from "../varietyList";
import VarietyItem from "../variteyItem";
import AdonisImage from "@/images/adonis.svg";
import BambouImage from "@/images/bambou.svg";
import SarnumImage from "@/images/BAZILLERETRO.svg";
import BazilletetroImage from "@/images/BAZILLERETRO.svg";
import BoccionzImage from "@/images/Boccionz.svg";
import BazilleImage from "@/images/basile.svg";
import AdonisBottleImage from "@/images/adonisbottle.svg";
import diademe from "@/images/diademe_or.svg";
import GrooveDroit from "@/images/groove-droit-bas_or-brillant.svg";
import Pompe from "@/images/pompe_alu_arg-mat_catalogue_9585331471.svg";
import AluSpace from "@/images/AluSpace_wenge_cp15 (1).svg";
import Pompe31 from "@/images/pompe-31lp-or_or-brillant.svg";
import Amor from "@/images/Amour_surlyn_alu-or_cpe.svg";
import CoffieGroove from "@/images/Coiffe-3-Groove_alu-arg_cp15 (1).svg";
import CpffoeLisse from "@/images/Coiffe-Lisse_alu-or-br_cp (1).svg";
import AluBall from "@/images/AluBall_wenge_cp15_config_ico 1 (1).svg";
import FilterComponent from "../filter";

const ParentComponent = () => {
  const [list, setList] = useState(null);
  const [showVarietyList, setShowVarietyList] = useState(false);
  const [itemSelectedShow, setItemSelectedShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);
  const [capList, setCapList] = useState();
  const [bottleList, setBottleList] = useState();
  const [pumpList, setPumpList] = useState();
  const handleListClick = (item) => {
    let selectedItemData = [];
    let bottleData = [];
    let capData = [];
    let pumpData = [];
    let liquidData = [];
    let decorationData = [];
    switch (item) {
      case "Bottle":
      case "#AC2D2D":
        bottleData = [
          { image: AdonisImage, title: "ADONIS", type: "bottle" },
          { image: SarnumImage, title: "SARNUM", type: "bottle" },
          {
            image: BazilletetroImage,
            title: "BazilletetroImage",
            type: "bottle",
          },
          { image: BoccionzImage, title: "BoccionzImage", type: "bottle" },
          { image: BazilleImage, title: "BazilleImage", type: "bottle" },
          {
            image: AdonisBottleImage,
            title: "AdonisBottleImage",
            type: "bottle",
          },
        ];
        selectedItemData = bottleData;
        break;
      case "Pumps":
      case "#1E40B7":
        pumpData = [
          { image: diademe, title: "Diademe", type: "pump" },
          { image: GrooveDroit, title: "GrooveDroit", type: "pump" },
          { image: Pompe, title: "Pompe", type: "pump" },
          { image: Pompe31, title: "Pompe31", type: "pump" },
        ];
        selectedItemData = pumpData;
        break;
      case "Caps":
      case "#3AAB61":
        capData = [
          { image: AluSpace, title: "AluSpace", type: "cap" },
          { image: Amor, title: "Amor", type: "cap" },
          { image: CoffieGroove, title: "CoffieGroove", type: "cap" },
          { image: CpffoeLisse, title: "CpffoeLisse", type: "cap" },
          { image: AluBall, title: "AluBall", type: "cap" },
        ];
        selectedItemData = capData;
        break;
      case "Liquid":
      case "#E6EA1E":
        liquidData = [
          { image: AluSpace, title: "AluSpace", type: "liquid" },
          { image: Amor, title: "Amor", type: "liquid" },
          { image: AluSpace, title: "AluSpace", type: "liquid" },
          { image: Pompe31, title: "Pompe31", type: "liquid" },
        ];
        selectedItemData = liquidData;

        break;
      case "Decoration":
      case "#030000":
        decorationData = [
          { image: AluSpace, title: "AluSpace", type: "decoration" },
          { image: Amor, title: "Amor", type: "decoration" },
          { image: diademe, title: "Diademe", type: "decoration" },
          { image: GrooveDroit, title: "GrooveDroit", type: "decoration" },
        ];
        selectedItemData = decorationData;

        break;
      default:
        break;
    }

    setList(selectedItemData);
    setShowVarietyList(true);
  };

  const handleItemClick = (item) => {
    console.log("item", item);
    switch (item.type) {
      case "bottle":
        setBottleList(item);
        break;
      case "cap":
        console.log("cap");
        setCapList(item);
        break;
      case "pump":
        console.log("pump");
        setPumpList(item);
        break;
      default:
        // setList([]);
        break;
    }

    setItemSelectedShow(true);
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
        <Sidebar onItemClick={handleListClick} />
        {showVarietyList ? (
          <VarietyList
            varietyList={list}
            onItemClick={handleItemClick}
            onFilter={handleFilter}
          />
        ) : (
          ""
        )}
        {filterShow && (
          <FilterComponent
            filterList={handleListClick}
            setFilterShow={setFilterShow}
            filterShow={filterShow}
          />
        )}

        {itemSelectedShow && (
          <div className="variety-list-sec">
            <VarietyItem
              bottleList={bottleList}
              capList={capList}
              pumpList={pumpList}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentComponent;
