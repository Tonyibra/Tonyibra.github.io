import React from "react";
import { cardsInfoData } from "../card-info.js";
import ServiceCard from "./ServiceCard";
const Services = () => {
	return (
		<div className="services-list">
			{cardsInfoData.map((card) => (
				<ServiceCard card={card} />
			))}
		</div>
	);
};

export default Services;
