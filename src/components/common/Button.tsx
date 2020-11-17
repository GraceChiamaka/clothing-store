import React, { ButtonHTMLAttributes } from "react";
import { JsxElement } from "typescript";
interface ButtonProps {
	title: string | JsxElement;
	type: "button" | "submit" | "reset";
	variant: "primary" | "secondary" | "default";
	className?: string;
	block?: boolean;
}

const Button = ({
	title,
	type = "button",
	variant = "default",
	className = "",
	block = false,
	...props
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={`btn btn-${variant} ` + (block ? "btn-block" : "") + className}
		>
			{" "}
			{title}
		</button>
	);
};

export default Button;
