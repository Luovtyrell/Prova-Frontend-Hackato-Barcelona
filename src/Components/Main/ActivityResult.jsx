import { useActivity } from "../../context/ActivityContext";

function ActivityResult() {
  const { activity, loading, error } = useActivity();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-14">
        <span className="loading loading-spinner text-boored-purple"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center text-center mt-5">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container text-center font-bold mt-6 ml-14 mr-14">
      <h2 className="font-bold text-center mt-6 text-2xl">Activitat:</h2>
      <p className="text-center mt-4">{activity ? activity.activity : null}</p>
    </div>
  );
}

export default ActivityResult