import React from "react";

const ResumeCard = ({ data }) => {
	return (
		<>
			<div className="body-container">
				<div className="education-card">
					<h5 className="date">{data.date}</h5>
					<h4 className="name">{data.major}</h4>
					<span className="uni">{data.uni}</span>
					<p>{data.about}</p>
				</div>
			</div>
		</>
	);
};

export default ResumeCard;
