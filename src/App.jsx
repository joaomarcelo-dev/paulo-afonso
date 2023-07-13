import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Alerts from "./pages/Alerts"
import Calendar from "./pages/Calendar"

function App() {
  return (
    <Routes>
      <Route 
        index 
        path="/" 
        Component={() => (
          <Home />
        )}
        />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/alerts"
        element={<Alerts />}
      />

      <Route
        path="/calendar"
        element={<Calendar />}
      />
      <Route
        path="*"
        element={<Home />}
      />

    </Routes>
  )
}

export default App
