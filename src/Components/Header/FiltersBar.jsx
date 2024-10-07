import { useState } from "react";
import PurpleButton from "../UI/PurpleButton";
import { useActivity } from "../../context/ActivityContext";

const filtersMap = {
  Social: "social",
  Educació: "education",
  Caritat: "charity",
  Cuinar: "cooking",
};

function FiltersBar() {
  const { setFilter } = useActivity();
  const [activeFilter, setActiveFilter] = useState("");

  const handleFilterClick = (label) => {
    const type = filtersMap[label];
    const newFilter = activeFilter === type ? "" : type;
    setActiveFilter(newFilter);
    setFilter(newFilter);
    console.log(`Filtre seleccionat: ${newFilter}`);
  };

  const filterLabels = ["Social", "Educació", "Caritat", "Cuinar"];

  return (
    <div className="flex flex-wrap justify-center gap-2 my-6 px-4">
      {filterLabels.map((label) => (
        <PurpleButton
          key={filtersMap[label]}
          label={label}
          isActive={activeFilter === filtersMap[label]}
          onClick={() => handleFilterClick(label)}
        />
      ))}
    </div>
  );
}

export default FiltersBar;
