import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';
import ServiceItem from './ServiceItem';
import './Service.css';
import FirstImage from '../img/1.png';
import SecondImage from '../img/2.png';
import ThirdImage from '../img/3.png';
import ForthImage from '../img/4.png';

const Service = () => {
	return (
		<div className='service_wrapper'>
			<Carousel show={3} slide={3} swiping={true}>
				<ServiceItem
					source={FirstImage}
					service_name='Ocean Freight'
					service_descr='Esteem spirit temper to say adieus who direct self esteem'
				/>
				<ServiceItem
					source={SecondImage}
					service_name='Air Freight'
					service_descr='Esteem spirit temper to say adieus who direct self esteem'
				/>
				<ServiceItem
					source={ThirdImage}
					service_name='Land Freight'
					service_descr='Esteem spirit temper to say adieus who direct self esteem'
				/>
				<ServiceItem
					source={ForthImage}
					service_name='Land Freight'
					service_descr='Esteem spirit temper to say adieus who direct self esteem'
				/>
				<ServiceItem
					source={ThirdImage}
					service_name='Land Freight'
					service_descr='Esteem spirit temper to say adieus who direct self esteem'
				/>
				<ServiceItem
					source={ForthImage}
					service_name='Land Freight'
					service_descr='Esteem spirit temper to say adieus who direct self esteem'
				/>
			</Carousel>
		</div>
	);
};

export default Service;
