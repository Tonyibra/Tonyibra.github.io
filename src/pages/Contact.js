import React from "react";
import { motion } from "framer-motion";
const contactVariants = {
	ltr: { opacity: 0, x: -500 },
	anim: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	exit: {
		opacity: 0,
		y: 500,
		transition: { ease: "easeInOut" },
	},
};
const Contact = () => {
	return (
		<div className="about-container">
			<motion.div
				initial="ltr"
				animate="anim"
				variants={contactVariants}
				exit="exit"
				className="subpage"
			>
				<div className="about-header">
					<strong>Contact</strong>
					<span>Get In Touch</span>
				</div>
				<div className="form">
					<form action="">
						<input type="text" placeholder="Full Name" />
						<input type="email" placeholder="Email Address" />
						<textarea
							name="message"
							id="message"
							cols="50"
							rows="7"
							placeholder="Message for Me"
						></textarea>
						<button className="down-cv">Send message</button>
					</form>
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;
