import React, { ButtonHTMLAttributes } from "react";
import { JsxElement } from "typescript";
interface ButtonProps {
	title: string | JsxElement;
	type: "button" | "submit" | "reset";
	variant: "primary" | "secondary" | "default" | "outline";
	className?: string;
	block?: boolean;
	children?: any;
	onClick: () => void;
}

const Button = ({
	title,
	type = "button",
	variant = "default",
	className = "",
	block = false,
	onClick,
	children,
	...props
}: ButtonProps) => {
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
