import FiltersBar from "../../Components/Header/FiltersBar";
import NavBar from "../../Components/Header/NavBar";
import ToDoCard from "../../Components/Main/ToDoCard";
import ActivityResult from "../../Components/Main/ActivityResult";

function Home() {
  return (
    <>
      <NavBar />
      <FiltersBar />
      <ToDoCard />
      <ActivityResult />
    </>
  );
}

export default Home;
