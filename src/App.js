import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import FaQ from "./pages/FaQ"
import ProtectedRoute from "components/Routing/ProtectedRoute";
import BuyCars from "./pages/CarBuy";
import CarDetail from "./pages/CarDetail";
import Auth from "./pages/Auth/Auth";
import FormResult from "./pages/CarSell/FormResult";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import AnonymousRoute from "components/Routing/AnonymousRoute";
import CarSell from "./pages/CarSell";
import { useEffect } from 'react'
import { getQueryTable } from 'redux/reducers/carsSlice'
import { currentUserSelector, isAuthenticatedSelector } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import authSlice from "redux/reducers/authSlice";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import "swiper/css/thumbs";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const currentUser = useSelector(currentUserSelector);

  useEffect(() => {
    const isAuthenticatedStorage = localStorage.getItem("isAuthenticated")
    const currentUserStorage = JSON.parse(localStorage.getItem("currentUser"))
    if (isAuthenticatedStorage && isAuthenticatedStorage === "true") {
      dispatch(authSlice.actions.verifyToken(currentUserStorage || {}))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated)
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
  }, [isAuthenticated, currentUser])

  useEffect(() => {
    dispatch(getQueryTable())
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FaQ />} />
        <Route path="/login" element={<Auth page="login" />} />
        <Route path="/create-account" element={<Auth page="create-account" />} />
        <Route path="/otp" element={<Auth page="otp" />} />
        <Route path="/buy-car" element={<BuyCars />} />
        <Route path="/ban-xe" element={<CarSell />} />
        <Route path="/dinh-gia" element={<CarSell />} />
        <Route path="/thu-cu-doi-moi" element={<CarSell />} />
        {/* <Route path="/:slug" element={<CarDetail />} /> */}

        <Route path="/uoc-luong-gia" element={<FormResult type={1} />} />
        <Route path="/ban-xe/thong-tin" element={<FormResult type={2} />} />
        <Route path="/thu-cu-doi-moi/thong-tin" element={<FormResult type={3} />} />


        {/* <Route element={<AnonymousRoute />}>
        </Route>

        <Route path="/account" element={<ProtectedRoute />}>
          <Route path="/account/:slug" element={<UserDashboard />} />
        </Route>

        <Route path="/not-found" element={<NotFound />} /> */}
      </Routes>

    </div>
  );
}

export default App;
