import React from "react";

const Button = ({
	title,
	type = "button",
	variant = "default",
	className = "",
	block = false,
	onClick,
	children,
	...props
}) => {
	return (
		<button
			type={type}
			className={
				`btn btn-${variant} ` + (block ? "btn-block " : "") + className
			}
			{...props}
			onClick={onClick}
		>
			{children && children}
			{title}
		</button>
	);
};

export default Button;
