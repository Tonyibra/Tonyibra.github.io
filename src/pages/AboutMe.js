import React from "react";
import tonyImg from "../img/tony.jpg";
import Services from "../Components/Services";
import { motion } from "framer-motion";
const AboutMe = () => {
	const aboutVariants = {
		ltr: { opacity: 0, x: 500 },
		anim: { opacity: 1, x: 0, transition: { duration: 0.5 } },
		exit: {
			opacity: 0,
			x: -2000,
			transition: { ease: "easeInOut" },
		},
	};

	return (
		<div className="about-container">
			<motion.div
				className="subpage"
				initial="ltr"
				animate="anim"
				variants={aboutVariants}
				exit="exit"
			>
				<div className="about-header">
					<strong>About Me</strong>
					<span>Front end Developer</span>
				</div>
				<div className="about-body">
					<img src={tonyImg} alt="logo" />

					<div className="about-wrapper">
						<strong>I'm a front end developer</strong>
						<p>
							Im Tony from lebanon a computer science student at NDU, Lebanon
							and a self taught web developer from 2019 creating a lot of SPA
							websites my goal is to get better everyday.My favorite stack right
							now is the MERN stack, and i drink a lot of coffee xD
						</p>
					</div>
					<div className="listinfo-wrapper">
						<div className="list-info">
							<ul>
								<li>
									<span className="title">Age</span>
									<span className="value">22</span>
								</li>
								<li>
									<span className="title">Residence</span>
									<span className="value">Lebanon</span>
								</li>
								<li>
									<span className="title">e-mail</span>
									<span className="value mail">
										<a href="mailto:tonyibra.ads@gmail.com">
											Tonyibra.ads@gmail.com
										</a>
									</span>
								</li>
								<li>
									<span className="title">Phone</span>
									<span className="value">+961 76940499</span>
								</li>
								<li>
									<span className="title">Freelance</span>
									<span className="value">Available</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="service-header">
					<strong>Services</strong>
				</div>
				<Services />
			</motion.div>
		</div>
	);
};

export default AboutMe;
