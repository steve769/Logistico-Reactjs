import React from 'react';
import './Banner.css';
import { BannerText } from './BannerText';

const Banner = ({ height }) => {
	return (
		<div className='banner'>
			<BannerText
				h6='For Personal & Business'
				h1='Global Logistic Service For Business'
			/>
		</div>
	);
};

export default Banner;
