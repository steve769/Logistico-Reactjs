import React from 'react';
import { Button } from '../utils/Button';
import './Cta.css';

const Cta = () => {
	return (
		<div className='cta'>
			<div className='cta_text'>
				<h2>100% secure and safe</h2>
				<p>
					Esteem spirit temper too say adieus who direct esteem. It look estee
					luckily or
					<br /> picture placing drawing.
				</p>
			</div>
			<div className='cta_btn'>
				<Button buttonSize='btn-radius-size' buttonStyle='btn-radius-style'>
					+254 707 204 569
				</Button>
			</div>
		</div>
	);
};

export default Cta;
