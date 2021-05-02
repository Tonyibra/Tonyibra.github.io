import React from "react";
import { motion } from "framer-motion";
const portfolioVariants = {
	ltr: { opacity: 0, y: -500 },
	anim: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	exit: {
		opacity: 0,
		y: 500,
		transition: { ease: "easeInOut" },
	},
};
const Portfolio = () => {
	return (
		<div className="resume-container">
			<motion.div
				initial="ltr"
				animate="anim"
				variants={portfolioVariants}
				exit="exit"
				className="subpage"
			>
				<div className="resume-header">
					<strong>Portfolio</strong>
					<span>My Best Works</span>
				</div>
				<div className="filter-area">
					<ul className="filter-list">
						<li>
							<a className="filter-btn active" data-group="all">
								All
							</a>
						</li>
						<li>
							<a className="filter-btn " data-group="media">
								Clones
							</a>
						</li>
						<li>
							<a className="filter-btn " data-group="all">
								API
							</a>
						</li>
						<li>
							<a className="filter-btn " data-group="all">
								Full Stack
							</a>
						</li>
					</ul>
				</div>
				<div className="grid-gallery">
					<ul className="grid">
						<li>
							<div className="box img1"></div>
						</li>
						<li>
							<div className="box img2"></div>
						</li>
						<li>
							<div className="box img3"></div>
						</li>
						<li>
							<div className="box img4"></div>
						</li>
					</ul>
				</div>
			</motion.div>
		</div>
	);
};

export default Portfolio;
