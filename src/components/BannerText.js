import React from 'react';
import { Button } from '../utils/Button';
import './BannerText.css';

export const BannerText = ({ h6, h1, children }) => {
	return (
		<div className='bannerText'>
			<h6>For Personal & Business</h6>
			<h1>
				Global Logistic Service <br />
				For Business
			</h1>
			<Button buttonStyle='btn-filled' buttonSize='btn-large'>
				Our Services
			</Button>
		</div>
	);
};
