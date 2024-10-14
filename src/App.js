import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import axios from "axios";

import Home from "./components/pages/home";
import Categories from "./components/pages/categories/index.tsx";
import Shop from "./components/pages/shops";
import Contacts from "./components/pages/contacts";

import RegistrationForm from "./components/Register/index.js"
import LoginForm from "./components/LoginForm"
import Vnedorojnik from "./components/pages/categories/vnedorojnik/index.tsx";
import ToyotaLc200 from "./components/pages/categories/vnedorojnik/toyota_lc_200";
import ToyotaLc200Electric from "./components/pages/categories/vnedorojnik/toyota_lc_200/Электричество";

import AdminPanel from './components/pages/admin/index.jsx';
import AdminUsers from './components/pages/admin/Users/index.js';
import AdminCategory from './components/pages/admin/Category/index.tsx';
import AdminSubCategory from './components/pages/admin/subCategory/index.tsx';
import AdminProduct from './components/pages/admin/Product/index.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/category/:id" element={<Categories />} />
          <Route path="/category/:id/product" element={<>Text</>} />
          <Route path="/toyota_lc_200" element={<ToyotaLc200 />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/toyota_lc_200_electric" element={<ToyotaLc200Electric />} />
          {/* Обертываем админские маршруты в AdminPanel */}
          <Route path="/adminPanel/*" element={<AdminPanel />}>
            <Route index element={<AdminUsers />} />
            <Route path="category" element={<AdminCategory />} />
            <Route path="subCategory" element={<AdminSubCategory />} />
            <Route path="product" element={<AdminProduct />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
