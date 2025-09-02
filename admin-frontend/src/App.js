import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AdminLayout from "./components/Layouts/Admin-Layout/AdminLayout";


function App() {
  return (
    <>
      <h1 className="text-center">Admin-Frontend</h1>
      <Routes>
        {/* Admin Panel */}
        <Route path="/admin/*" element={<AdminLayout/>} />
      </Routes>
    </>
  );
}

export default App;
