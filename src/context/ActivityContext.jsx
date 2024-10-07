import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import apiFetchActivity from "../services/apiFetchActivity";

const ActivityContext = createContext();

export function useActivity() {
  return useContext(ActivityContext);
}

export function ActivityProvider({ children }) {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  const fetchActivity = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiFetchActivity(filter);
      setActivity(response.activity ? response : response[0]);
    } catch (error) {
      setError(
        `Error a l'hora d'obtenir l'activitat. Prova-ho passats uns minuts. Més informació: ${error}`
      );
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    activity,
    loading,
    error,
    fetchActivity,
    setFilter,
  };

  return (
    <ActivityContext.Provider value={value}>
      {children}
    </ActivityContext.Provider>
  );
}

ActivityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
