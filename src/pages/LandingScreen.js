import React from "react";
import "../styles/LandingPage.css";
import { AnimatePresence, motion } from "framer-motion";
const LandingScreen = () => {
	const fadeLeft = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.1 } },
		exit: { opacity: 0, transition: { ease: "easeInOut", duration: 0.1 } },
	};
	return (
		<div className="landing-container">
			<motion.strong
				variants={fadeLeft}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				Tony Ibrahim
			</motion.strong>
			<motion.span
				variants={fadeLeft}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.7 }}
			>
				Web Developer
			</motion.span>
		</div>
	);
};

export default LandingScreen;
