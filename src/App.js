import React, { useState } from "react";
import "./App.css";
import LandingScreen from "./pages/LandingScreen";
import AboutMe from "./pages/AboutMe";
import { useScreenType } from "./useScreenType";
import Nav from "./Components/Nav";
import NavBar from "./Components/NavBar.js";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Resume from "./pages/Resume";
import projects from "./pages/Portfolio";

function App() {
	const [mobile, setMobile] = useState(false);
	const location = useLocation();
	useScreenType();
	return (
		<div className="App">
			{useScreenType() === "mobile" ? (
				<Nav mobile={mobile} setMobile={setMobile} />
			) : (
				""
			)}
			<NavBar mobile={mobile} setMobile={setMobile} />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route path="/" component={LandingScreen} exact />
					<Route path="/about" component={AboutMe} exact />
					<Route path="/resume" component={Resume} exact />
					<Route path="/projects" component={projects} exact />
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
