import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ buttonSize, buttonStyle, children }) => {
	const [hover, setHover] = useState(false);

	const hoverEffect = () => {
		setHover(!hover);
		document.querySelector('.btn').classList.add('btn-hover');
	};
	return (
		<>
			<button
				className={`btn ${buttonStyle} ${buttonSize}`}
				onMouseOver={hoverEffect}
			>
				{children}
			</button>
		</>
	);
};

Button.propTypes = {
	buttonSize: PropTypes.string.isRequired,
	buttonStyle: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
};
