import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import Header from "./components/Header";
import Search from "./components/Search";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <div className="app-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          
          <Header />
          
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:query" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <Footer />
          
        </div>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
