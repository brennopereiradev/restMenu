import Footer from "components/Footer";
import Menu from "components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import About from "pages/About";
import Cardapio from "pages/Cardapio";
import Init from "pages/Init";
import NotFound from "pages/NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
            <Route path="/" element={<PaginaPadrao />} >
                <Route index element={<Init />} />
                <Route path='cardapio' element={<Cardapio />} />
                <Route path='about' element={<About />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}
