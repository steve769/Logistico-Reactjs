import React from 'react';
import AboutImg from '../img/about.png';
import { Button } from '../utils/Button';
import './About.css';

const About = () => {
	return (
		<div className='about_wrapper'>
			<div className='about_png'>
				<img src={AboutImg} alt='Logistics Company Ltd' />
			</div>
			<div className='about_text'>
				<h1>Why Choose Us</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
					<br /> eiusmod tempor incididunt.
				</p>
				<ul>
					<li>
						<i class='far fa-check-circle'></i>Apartments frequently or
						motionless.
					</li>
					<li>
						<i class='far fa-check-circle'></i>Duis aute irure dolor in
						reprehenderit in voluptate.
					</li>
					<li>
						<i class='far fa-check-circle'></i>Voluptatem quia voluptas sit
						aspernatur.
					</li>
				</ul>
				<Button buttonSize='btn-medium' buttonStyle='btn-outline'>
					About Us
				</Button>
			</div>
		</div>
	);
};
export default About;
