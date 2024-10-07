import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { ActivityProvider } from "./context/ActivityContext";

function App() {
  return (
    <ActivityProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ActivityProvider>
  );
}

export default App;
