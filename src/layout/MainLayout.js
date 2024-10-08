import MainNavbar from "components/Navbar";
import Footer from "components/Footer";
import { isAuthenticatedSelector } from "redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "utils";
import { getProfile } from "redux/reducers/authSlice";
import { selectLoading } from "redux/reducers/appSlice";
import Loading from "common/Loading";

function MainLayout({ children }) {
  const isAuthenticated = useSelector(isAuthenticatedSelector)
  const loading = useSelector(selectLoading)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
      const access_token = getAccessToken()
      if(access_token){
        dispatch(getProfile({access_token: access_token}))
      }
  }, [isAuthenticated, navigate, dispatch])

  return (
    <>
      <MainNavbar />
      {children}
      {loading && <Loading />}
      <Footer />
    </>
  );
}

export default MainLayout;
