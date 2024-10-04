import FiltersBar from "../../Components/Header/FiltersBar";
import NavBar from "../../Components/Header/NavBar";
import ToDoCard from "../../Components/Main/ToDoCard";

function Home() {
  return (
    <>
      <NavBar />
      <FiltersBar />
      <ToDoCard />
    </>
  );
}

export default Home;
