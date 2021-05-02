import React from "react";
import { education } from "../Education";
import ResumeCard from "../Components/ResumeCard";
import ProjectsCard from "../Components/ProjectsCard";
import { motion } from "framer-motion";
const Resume = () => {
	const resumeVariants = {
		ltr: { opacity: 0, x: -500 },
		anim: { opacity: 1, x: 0, transition: { duration: 0.5 } },
		exit: {
			opacity: 0,
			x: -2000,
			transition: { ease: "easeInOut" },
		},
	};

	return (
		<div className="resume-container">
			<motion.div
				variants={resumeVariants}
				initial="ltr"
				animate="anim"
				exit="exit"
				className="subpage"
			>
				<div className="resume-header">
					<strong>Resume</strong>
					<span>2 Years of Experience</span>
				</div>
				<div className="title">
					<strong>Education</strong>
				</div>
				<div className="projects-list">
					{education.map((data) => (
						<ResumeCard data={data} key={data.id} />
					))}
				</div>
				<div className="title">
					<strong>Projects</strong>
				</div>
				<ProjectsCard />
				<div className="down-cv">
					<button>Download CV</button>
				</div>
			</motion.div>
		</div>
	);
};

export default Resume;
