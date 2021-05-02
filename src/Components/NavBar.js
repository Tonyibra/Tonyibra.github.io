import React from "react";
import tonyImg from "../img/tony.jpg";
import "../styles/NavBar.css";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import DeveloperModeOutlinedIcon from "@material-ui/icons/DeveloperModeOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
const NavBar = ({ mobile, setMobile }) => {
	const setMobileMenu = () => {
		setMobile(false);
	};

	return (
		<div className={!mobile ? "nav-bar" : "nav-bar mobile-ready "}>
			<div className="nav-header">
				<img src={tonyImg} alt="logo" />
				<strong>Tony Ibrahim</strong>
			</div>
			<div className="nav-body">
				<ul>
					<Link to="/">
						<li onClick={setMobileMenu}>
							<HomeIcon className="ico-color" />
							Home
						</li>
					</Link>
					<Link to="/about">
						<li onClick={setMobileMenu}>
							<AccountCircleOutlinedIcon className="ico-color" />
							About me
						</li>
					</Link>
					<Link to="/resume">
						<li onClick={setMobileMenu}>
							<DeveloperModeOutlinedIcon className="ico-color" />
							Resume
						</li>
					</Link>
					<Link to="projects">
						<li onClick={setMobileMenu}>
							<LocalLibraryOutlinedIcon className="ico-color" />
							Projects
						</li>
					</Link>
					<Link to="/contact">
						<li onClick={setMobileMenu}>
							<MailOutlineOutlinedIcon className="ico-color" />
							Contact
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
