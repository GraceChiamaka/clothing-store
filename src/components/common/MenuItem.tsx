import React from "react";
import { Link } from "react-router-dom";

export interface MenuItemProps {
	title: string;
	imageUrl: string;
	size?: string;
	pageUrl: string;
}

const MenuItem = (props: MenuItemProps) => {
	const { title, imageUrl, size, pageUrl } = props;
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
