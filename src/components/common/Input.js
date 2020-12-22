import React from "react";

const Input = ({
	label,
	type = "text",
	placeholder,
	id,
	inputClass,
	labelClass,
	onChange,
}) => {
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
