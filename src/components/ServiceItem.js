import React from 'react';
import './ServiceItem.css';

const ServiceItem = ({ source, service_name, service_descr }) => {
	return (
		<div className='service_item'>
			<img src={source} alt='Logistica service' />
			<h3>{service_name}</h3>
			<p>{service_descr}</p>
		</div>
	);
};

export default ServiceItem;
