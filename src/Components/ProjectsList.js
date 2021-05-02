import React from "react";

const ProjectsList = ({ data }) => {
	return (
		<div>
			<div className="material-list">
				<div className="body-container">
					<div className="education-card">
						<h5 className="date">{data.name}</h5>
						<span className="uni">Material Used :</span>
						<div className="materials">
							{data.tools.map((tool, index) => (
								<h4 className="tools">{`${tool}${
									tool.length <= index ? ", " : " "
								}`}</h4>
							))}
						</div>
						<p className="about-p">About: {data.about}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsList;
