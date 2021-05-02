import React from "react";

const ServiceCard = ({ card }) => {
	return (
		<div className="card">
			<div className="card-img">
				<img src={card.img} alt="logo" />
			</div>
			<div className="card-info">
				<p>{card.p}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
