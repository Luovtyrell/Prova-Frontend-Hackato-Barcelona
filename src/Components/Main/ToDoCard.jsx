import mainCharacter from "/assets/mainCharacter.png";
import "./ToDoCard.css";
import MainButton from "../UI/MainButton";

export default function ToDoCard() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="card">
        <figure className="px-4 pt-4">
          <img
            src={mainCharacter}
            alt="Main Character"
            className="w-40 relative z-10"
          />
        </figure>
        <div className="card-body custom-body bg-gray-100 -mt-4">
          <h2 className="card-title font-bold text-center">
            TROBA ALGUNA COSA A FER
          </h2>
          <MainButton key={"Generar"} label={"Generar"} />
        </div>
      </div>
    </div>
  );
}
