import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import FindBlood from "./pages/FindBlood";
import RegisterNow from "./components/RegisterNow";
import Login from "./pages/Login";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about-us" element={<AboutUs />}></Route>
				<Route path="/find-blood" element={<FindBlood />}></Route>
				<Route path="/register-now" element={<RegisterNow />}></Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
