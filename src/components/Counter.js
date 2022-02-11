import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Counter.css';

const Counter = () => {
	return (
		<div className='main'>
			<VisibilitySensor partialVisibility offset={{ bottom: 300 }}>
				{({ isVisible }) => {
					return (
						<div className='all_counts'>
							<div className='single_count'>
								<h1 style={{ height: 100 }}>
									{isVisible ? (
										<CountUp end={998} duration={2} start={0} />
									) : null}
								</h1>
								<h2>Goods Delivered</h2>
							</div>
							<div className='single_count'>
								<h1 style={{ height: 100 }}>
									{isVisible ? (
										<CountUp end={17} duration={2} start={0} />
									) : null}
								</h1>
								<h2>Awards Won</h2>
							</div>
							<div className='single_count'>
								<h1 style={{ height: 100 }}>
									{isVisible ? (
										<CountUp end={799} duration={2} start={0} />
									) : null}
								</h1>
								<h2>Staff Worldwide</h2>
							</div>
							<div className='single_count'>
								<h1 style={{ height: 100 }}>
									{isVisible ? (
										<CountUp end={178} duration={2} start={0} />
									) : null}
								</h1>
								<h2>Vehicles Stored</h2>
							</div>
						</div>
					);
				}}
			</VisibilitySensor>
		</div>
	);
};
export default Counter;
