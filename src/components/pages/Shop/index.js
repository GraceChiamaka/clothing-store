import React, { useState } from "react";
import PreviewCollection from "../../common/PreviewCollection";

import CollectionData from "./shop-data";

export interface ShopPageProps {}

const initialCollectionState = CollectionData;

const ShopPage = () => {
	const [collection, setSollection] = useState(initialCollectionState);
	return (
		<div className="shop-container">
			{CollectionData.map(({ id, title, items, ...collectionProps }) => {
				return <PreviewCollection key={id} title={title} items={items} />;
			})}
		</div>
	);
};

export default ShopPage;
