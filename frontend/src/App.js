import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homescreen from "./Screens/Homescreen";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productscreen from "./Screens/Productscreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import CartScreen from "./Screens/CartScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import RequestChangePass from "./Screens/RequestChangepass";
import ConfirmChangePass from "./Screens/ConfirmChangepass";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/cart' element={<CartScreen/>}/>
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/request-changepass' element={<RequestChangePass />} />
          <Route path='/confirm-changepass/:uid/:token' element={<ConfirmChangePass />} />
          <Route path='/' element={<Homescreen />} exact />
          <Route path='/product/:id' element={<Productscreen />} />
          <Route path='/shipping' element={<ShippingScreen/>} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
