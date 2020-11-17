import React from "react";
import CollectionItem from "./CollectionItem";

interface CollectionItems {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}

export interface PreviewCollectionProps {
	title: string;
	items: CollectionItems[];
}

const PreviewCollection = (props: {
	title: string;
	items: CollectionItems[];
}) => {
	const { title, items } = props;
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem
							id={item.id}
							name={item.name}
							price={item.price}
							imageUrl={item.imageUrl}
						/>
					))}
			</div>
		</div>
	);
};

export default PreviewCollection;
