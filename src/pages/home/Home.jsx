import FiltersBar from "../../Components/Header/FiltersBar";
import NavBar from "../../Components/Header/NavBar";
import ToDoCard from "../../Components/Main/ToDoCard";
import ActivityResult from "../../Components/Main/ActivityResult";

function Home() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col w-full lg:w-1/2">
          <FiltersBar />
          <ToDoCard />
        </div>
        <div className="hidden lg:block border-l-2 border-dashed border-black h-auto mx-4"></div>
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 lg:pl-8">
          <ActivityResult />
        </div>
      </div>
    </>
  );
}

export default Home;
