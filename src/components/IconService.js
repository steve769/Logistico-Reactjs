import React from 'react';
import IconServiceItem from './IconServiceItem';
import Icon1 from '../img/airplane.png';
import Icon2 from '../img/live.png';
import Icon3 from '../img/world.png';
import './IconService.css';

const IconService = () => {
	return (
		<div className='icon_service_wrapper'>
			<IconServiceItem
				svg={Icon1}
				h3='Transportation'
				txt='Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.'
			/>
			<IconServiceItem
				svg={Icon2}
				h3='Live Monitoring'
				txt='Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.'
			/>
			<IconServiceItem
				svg={Icon3}
				h3='World Wide Services'
				txt='Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.'
			/>
		</div>
	);
};

export default IconService;
