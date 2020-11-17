import React from "react";

interface InputProps {
	label?: string;
	type?: string;
	placeholder?: string;
	id?: string;
	labelClass?: string;
	inputClass?: string;
	onChange: (value: any) => void;
}

const Input = ({
	label,
	type = "text",
	placeholder,
	id,
	inputClass,
	labelClass,
	onChange,
}: InputProps) => {
	return (
		<div className="form-group">
			{label && (
				<label htmlFor="" className={labelClass}>
					{label}
				</label>
			)}
			<input
				type={type}
				id={id}
				className={inputClass}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
