import React from 'react';
import './SectionHeading.css';

export const SectionHeading = ({ children }) => {
	return (
		<div className='section_heading'>
			<h1>{children}</h1>
		</div>
	);
};
