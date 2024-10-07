import { useActivity } from "../../context/ActivityContext";

export default function ActivityResult() {
  const { activity, loading, error } = useActivity();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="text-center mt-4">
      <p>{activity ? activity.activity : null}</p>
    </div>
  );
}
