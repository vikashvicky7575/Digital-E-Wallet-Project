import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/loadingPage/LoadingPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Onboarding from "./pages/Onboarding/Onboarding";
import SignIn from "./pages/SignIn/SignIn";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/loadingPage" element={<LoadingPage />} />
          <Route path="/getstarted" element={<Onboarding />} />
          <Route path='/signin' element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
