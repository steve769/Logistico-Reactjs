import React from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer_1'>
				<h3 className='footer_title'>Services</h3>
				<ul>
					<li>Air Transportation</li>
					<li>Ocean Freight</li>
					<li>Ocean Cargo</li>
					<li>Logistics</li>
					<li>WareHouse Moving</li>
				</ul>
			</div>
			<div className='footer_2'>
				<h3 className='footer_title'>Company</h3>
				<ul>
					<li>About</li>
					<li>News</li>
					<li>Testimonials</li>
					<li>Why Us?</li>
				</ul>
			</div>
			<div className='footer_3'>
				<h3 className='footer_title'>Industries</h3>
				<ul>
					<li>Chemicals</li>
					<li>Automotives</li>
					<li>Consumer Goods</li>
					<li>Life Science</li>
					<li>Foreign Trade</li>
				</ul>
			</div>
			<div className='footer_4'>
				<h3 className='footer_title'>Subscribe</h3>
				<div className='input_wrapper'>
					<input
						type='text'
						name='email'
						id='email'
						placeholder='enter email'
					/>
					<input type='submit' name='submit' />
				</div>
			</div>
		</div>
	);
};
export default Footer;
