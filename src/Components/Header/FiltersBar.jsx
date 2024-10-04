import PurpleButton from "../UI/PurpleButton";

const filtersLabel = ["Social", "Educació", "Caritat", "Cuinar"];

export default function FiltersBar() {
  return (
    <div className="flex flex-wrap justify-center gap-2 my-6 px-4">
      {filtersLabel.map((label) => (
        <PurpleButton key={label} label={label} />
      ))}
    </div>
  );
}
