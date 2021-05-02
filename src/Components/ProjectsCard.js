import React from "react";
import { projects } from "../Projects";
import ProjectsList from "./ProjectsList";
const ProjectsCard = () => {
	return (
		<div className="project-container">
			<div className="projects-list">
				{projects.map((data) => (
					<ProjectsList key={data.id} data={data} />
				))}
			</div>
		</div>
	);
};

export default ProjectsCard;
