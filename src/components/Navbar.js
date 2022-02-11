import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = (props) => {
	return (
		<div className={`menu-bar mobile-hide ${props.view}`}>
			<ul>
				<li>
					<Link to='/' className='nav_link'>
						Home
					</Link>
				</li>
				<li>
					<Link to='/services' className='nav_link'>
						Services
					</Link>
				</li>
				<li>
					<Link to='/about' className='nav_link'>
						About
					</Link>
				</li>
				<li>
					<Link to='/' className='nav_link'>
						Pages<i className='fas fa-angle-down'></i>
					</Link>
				</li>
				<li>
					<Link to='/' className='nav_link'>
						Blogs<i className='fas fa-angle-down'></i>
					</Link>
				</li>
				<li>
					<Link to='/' className='nav_link'>
						Contact
					</Link>
				</li>
			</ul>
			<i class='fas fa-1x fa-search'></i>
		</div>
	);
};

export default Navbar;
