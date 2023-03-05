import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () =>
  <>
    <Header />
    <Outlet />
    <Footer />
  </>

export default App;

