import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AssetDetail from "./pages/AssetDetail";
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/common/ProtectedRoute";
// New imports
import Individuals from "./pages/Individuals";
import Businesses from "./pages/Businesses";
import Institutions from "./pages/Institutions";
import Developers from "./pages/Developers";
import Company from "./pages/Company";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="assets/:id" element={<AssetDetail />} />
        <Route path="learn" element={<Learn />} />
        <Route path="individuals" element={<Individuals />} />
        <Route path="businesses" element={<Businesses />} />
        <Route path="institutions" element={<Institutions />} />
        <Route path="developers" element={<Developers />} />
        <Route path="company" element={<Company />} />
        <Route 
          path="profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;