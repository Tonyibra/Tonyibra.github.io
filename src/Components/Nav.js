import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "../styles/Nav.css";
const Nav = ({ mobile, setMobile }) => {
	const mobileMenuHandler = () => {
		setMobile(!mobile);
	};
	return (
		<div className="navbar">
			<div className="title">
				<strong>Tony Ibrahim</strong>
			</div>
			<div className="mobile-menu">
				<MenuIcon onClick={mobileMenuHandler} className="mobile-menu" />
			</div>
		</div>
	);
};

export default Nav;
