import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

const Tabs = ({
	children,
	defaultTab,
	contentClass = "",
	tabHeaderClass = "",
}) => {
	const router = useHistory();

	const queryTabExist = children.find(
		(child) => child.props.label === defaultTab
	);
	const initialTab = queryTabExist
		? queryTabExist.props.label
		: children[0].props.label;

	const [activeTab, setActiveTab] = useState(initialTab);
	const handleActiveTab = useCallback((label) => setActiveTab(label), []);

	const tabs = children.map((child) => (
		<button
			onClick={(e) => {
				e.preventDefault();
				handleActiveTab(child.props.label);
				router.push(`?tab=${activeTab}`);
			}}
			className={
				" tab__btn " +
				(child.props.label === activeTab ? " tab__btn-active" : "")
			}
			key={child.props.label}
		>
			{child.props.tabName}
		</button>
	));

	const tabContent = children.filter(
		(child) => child.props.label === activeTab
	);

	return (
		<div className="tab">
			<div className={"tabs__header " + tabHeaderClass}>{tabs}</div>
			<div className={"tabs__content " + contentClass}>{tabContent}</div>
		</div>
	);
};

const Tab = (props: any) => {
	return <>{props.children}</>;
};

export { Tabs, Tab };
