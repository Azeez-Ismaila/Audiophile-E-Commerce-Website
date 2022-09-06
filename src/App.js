import "./App.css";
import Earphones from "./Components/Earphones";
import Footer from "./Components/Footer";
import Headphones from "./Components/Headphones";
import Homepage from "./Components/Homepage";
import MarkTwoHeadphone from "./Components/MarkTwoHeadphone";
import Nav from "./Components/Nav";
import Products from "./Components/Products";
import ProductShop from "./Components/ProductShop";
import Speakers from "./Components/Speakers";

function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      {/* <Headphones /> */}
      {/* <MarkTwoHeadphone /> */}
      {/* <Speakers /> */}
      {/* <Earphones /> */}
      <ProductShop />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
