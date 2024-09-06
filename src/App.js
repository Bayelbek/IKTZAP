import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/pages/home";
import Categories from "./components/pages/categories/index.tsx";
import Shop from "./components/pages/shops";
import Contacts from "./components/pages/contacts";
import RegistrationForm from "./components/Register/index.js"
import LoginForm from "./components/LoginForm"
import Vnedorojnik from "./components/pages/categories/vnedorojnik/index.tsx";
import ToyotaLc200 from "./components/pages/categories/vnedorojnik/toyota_lc_200";
import ToyotaLc200Electric from "./components/pages/categories/vnedorojnik/toyota_lc_200/Электричество";
import axios from "axios";


function App() {

  const [test, setTest] = React.useState([])


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
          <Route
            path="/toyota_lc_200_electric"
            element={<ToyotaLc200Electric />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
