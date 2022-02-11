import React from 'react';
import './IconServiceItem.css';

const IconServiceItem = ({ svg, h3, txt }) => {
	return (
		<div className='icon_wrapper'>
			<img src={svg} alt='Shipping Logo' className='icon_image' />
			<h3 className='icon_title'>{h3}</h3>
			<p className='icon_desc'>{txt}</p>
		</div>
	);
};

export default IconServiceItem;
