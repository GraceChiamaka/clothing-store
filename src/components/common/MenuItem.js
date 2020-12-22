import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, pageUrl }) => {
	return (
		<div className={` ${size} menu-item`}>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<Link to={`/${pageUrl}`} className="subtitle">
					SHOP NOW
				</Link>
			</div>
		</div>
	);
};

export default MenuItem;
