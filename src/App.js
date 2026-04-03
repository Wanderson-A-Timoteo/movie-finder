import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
