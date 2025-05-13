import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Nabvar';
import Footer from './Pages/Footer';
import Home from './componentes/Home';
// Attar
import Series240 from './Attar/Series240';
import SeriousPremium from './Attar/seriouspremium';
import Atomizer from './Attar/Atomizer';
import Perfumes from './Attar/Perfumes';
import Combo from './Attar/Combo';
import Wholesale from './Attar/Wholesale';
// panjabi
import Platinum from './panjabi/Platinum';
import Elegant from './panjabi/elegant';
import Printed from './panjabi/printed';
import Chikankar from './panjabi/chikankar';
// T - SHIRT
import FullSleeve from './T-SHIRT/FullSleeve';
import HalfSleeve from './T-SHIRT/HalfSleeve';
// PANT - TROUSER
import Pant from './PANT-TROUSER/pant';
import Tshirt from './PANT-TROUSER/Tshirt';
import Pajama from './PANT-TROUSER/Pajama';
// Menclothing
import Tupi from './Menclothing/Tupi';
import Thobe from './Menclothing/Thobe';
import Sneakers from './Menclothing/sneakers';
import Backpack from './Menclothing/backpack';
// NaturalFoods
import NaturalFoods from './NaturalFoods/NaturalFoods'
// Combo
import Comboes from './Combo/Comboes'

import NotFound from './NotFound/NotFound'
import Breadcrumb from './Breadcrumb';
import Register from './componentes/register';
import Cart from './Store/Cart';
import Login from './componentes/Login';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Attar/Series240" element={<Series240 />} />
        <Route path="/Attar/seriouspremium" element={<SeriousPremium />} />
        <Route path="/Attar/Atomizer" element={<Atomizer />} />
        <Route path="/Attar/Perfumes" element={<Perfumes />} />
        <Route path="/Attar/Combo" element={<Combo />} />
        <Route path="/Attar/Wholesale" element={<Wholesale />} />

        <Route path="/panjabi/Platinum" element={<Platinum />} />
        <Route path="/panjabi/elegant" element={<Elegant />} />
        <Route path="/panjabi/printed" element={<Printed />} />
        <Route path="/panjabi/chikankar" element={<Chikankar />} />

        <Route path="/T-SHIRT/HalfSleeve" element={<HalfSleeve />} />
        <Route path="/T-SHIRT/FullSleeve" element={<FullSleeve />} />

        <Route path="/PANT-TROUSER/pant" element={<Pant />} />
        <Route path="/PANT-TROUSER/Tshirt" element={<Tshirt />} />
        <Route path="/PANT-TROUSER/Pajama" element={<Pajama />} />
        {/* some */}
        <Route path="/Menclothing/Tupi" element={<Tupi />} />
        <Route path="/Menclothing/Thobe" element={<Thobe />} />
        <Route path="/Menclothing/sneakers" element={<Sneakers />} />
        <Route path="/Menclothing/Backpack" element={<Backpack />} />

        <Route path="/NaturalFoods/NaturalFoods" element={<NaturalFoods />} />
        <Route path="/Combo/Comboes" element={<Comboes />} />
        {/* login */}
        <Route path="/Login" element={<Login />} />
        {/* login */}
        < Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        {/* cart */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;