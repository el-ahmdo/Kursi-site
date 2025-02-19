import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./pages/About_page/About";
import Product from "./pages/Product_page/Product";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
// Import images
import gold from "./Components/Assets/images/Goldimage.jpeg"; // Adjust the path if needed
import tin from "./Components/Assets/images/Tin.jpeg"; // Adjust the path if needed
import nickel from "./Components/Assets/images/Nickel.jpeg"; // Adjust the path if needed
import Layout from "./Layout";
import Generalinfo from "./Components/Product_info/Generalinfo";
import Sustainability from "./pages/Sustainability/Sustainability";
import SustainabilityHome from "./Components/Sustainability_compoments/sustainabilityHome";
import SustainabilityEnvironment from "./Components/Sustainability_compoments/SustainabilityEnvironment";
import NewsPage from "./pages/NewsAndMedia_page/NewsPage";
import Careers from "./pages/careers_page/Careers";
import ContactPage from "./pages/Contact_us/ContactPage";
// Create the context
export const productsContext = createContext();

function App() {
  const products = [
    { id: 1, product: "Gold", background: gold },
    { id: 2, product: "Tin", background: tin },
    { id: 3, product: "Nickel", background: nickel },
    { id: 4, product: "Gold", background: gold },
    { id: 5, product: "Tin", background: tin },
    { id: 6, product: "Nickel", background: nickel },
    { id: 7, product: "Gold", background: gold },
    { id: 8, product: "Tin", background: tin },
    { id: 9, product: "Nickel", background: nickel },
    { id: 10, product: "Tin", background: tin },
    { id: 11, product: "Nickel", background: nickel },
    { id: 12, product: "Gold", background: gold },
    { id: 13, product: "Tin", background: tin },
    { id: 14, product: "Nickel", background: nickel },
    { id: 15, product: "Tin", background: tin },
    { id: 16, product: "Nickel", background: nickel },
    { id: 17, product: "Gold", background: gold },
    { id: 18, product: "Tin", background: tin },
  ];

  return (
    <>
      {/* Wrap the entire application with the context provider */}
      <productsContext.Provider value={products}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Products" element={<Layout />}>
            <Route index element={<Product />} />
            <Route path=":productId" element={<ProductDetails />}>
              <Route index element={<Generalinfo />} />
              <Route path=":Graph" element={<Generalinfo />} />
            </Route>
          </Route>
          <Route path="sustainability" element={<Sustainability />}>
            <Route index element={<SustainabilityHome />} />
            <Route
              path="environment"
              element={
                <SustainabilityEnvironment text={"Environmental compliance"} />
              }
            />
            <Route
              path="social"
              element={<SustainabilityEnvironment text={"Social compliance"} />}
            />
            <Route
              path="government"
              element={
                <SustainabilityEnvironment text={"Government compliance"} />
              }
            />
          </Route>

          <Route path="News" element={<NewsPage />} />
          <Route path="Careers" element={<Careers />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </productsContext.Provider>
    </>
  );
}

export default App;
