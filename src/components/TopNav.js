import React from 'react';
import { Button } from '../utils/Button';
import Logo from './../img/logo.png';
import Navbar from './Navbar';
import './TopNav.css';

const TopNav = () => {
	return (
		<div className='topnav_wrapper'>
			<div className='logo'>
				<img src={Logo} alt='Logistics Company Logo' />
			</div>
			<div className='topnav_contact'>
				<div className='email_contact'>
					<p>
						<i className='fas fa-envelope'></i>info@docmed.com
					</p>
				</div>
				<div className='tel_contact'>
					<p>
						<i className='fas fa-phone'></i>1601-609 6780
					</p>
				</div>
				<div className='quote'>
					<Button buttonSize='btn-medium' buttonStyle='btn-outline'>
						Get Free Quote
					</Button>
				</div>
				<div className='mobile_bars'>
					<i class='fas fa-2x fa-bars'></i>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
