import React, { useState } from "react";
import MenuItem from "./MenuItem";

export interface DirectoryInfo {
	title: string;
	imageUrl: string;
	id: number;
	linkUrl: string;
	size?: string;
}

const initialDirectoryInfo: DirectoryInfo[] = [
	{
		title: "hats",
		imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
		id: 1,
		linkUrl: "hats",
	},
	{
		title: "jackets",
		imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
		id: 2,
		linkUrl: "",
	},
	{
		title: "sneakers",
		imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
		id: 3,
		linkUrl: "",
	},
	{
		title: "womens",
		imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
		size: "large",
		id: 4,
		linkUrl: "",
	},
	{
		title: "mens",
		imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
		size: "large",
		id: 5,
		linkUrl: "",
	},
];

const Directory = () => {
	const [directoryInfo, setDirectoryInfo] = useState(initialDirectoryInfo);
	return (
		<div className="directory-menu">
			{directoryInfo.map((directory: DirectoryInfo) => {
				return (
					<MenuItem
						title={directory.title}
						imageUrl={directory.imageUrl}
						size={directory.size}
						pageUrl={directory.linkUrl}
					/>
				);
			})}
		</div>
	);
};

export default Directory;
