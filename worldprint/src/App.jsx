import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage"
import './styles/worldprint.css' 

function App() {
  return (
    <BrowserRouter>
    <nav className='wp-nav'>
    <Link to="/" className="wp-logo" style={{ textDecoration: "none" }}>
  ◦ Worldprint
</Link>
<span className="wp-tagline">What moves the world, moves in you</span>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

