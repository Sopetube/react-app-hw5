import SignIn from "./components/SignIn"
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
    <div className="login">
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='signin' element={<SignIn/>} />
        <Route path='signup' element={<SignUp/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
