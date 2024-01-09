import React from "react";

/*Components*/
import Context from './Context'
import Navbar from "./components/navbar/Navbar";
import RoutesComponent from "./RoutesComponent";
import Footer from "./components/footer/Footer";
import Scroll from "./Scroll";

function App() {
  return (
    <Context>
      <Navbar />
      <RoutesComponent />
      <Footer />
      <Scroll />
    </Context>
  );
}

export default App;
