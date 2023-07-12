import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Alerts from "./pages/Alerts"

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
    </Routes>
  )
}

export default App
