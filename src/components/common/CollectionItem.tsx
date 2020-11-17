import React from "react";

export interface CollectionItemProps {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
}

const CollectionItem = (props: CollectionItemProps) => {
	const { id, name, price, imageUrl } = props;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="collection-footer">
				<span className="name"></span>
				<span className="price"></span>
			</div>
		</div>
	);
};

export default CollectionItem;
