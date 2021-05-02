import React from "react";

const Portfolio = () => {
	return (
		<div className="resume-container">
			<div className="subpage">
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
			</div>
		</div>
	);
};

export default Portfolio;
