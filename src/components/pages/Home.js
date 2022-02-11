import React from 'react';
import IconService from '../IconService';
import Service from '../Service';
import Cta from '../Cta';
import About from '../About';
import Counter from '../Counter';
import Footer from '../Footer';
import { SectionHeading } from '../../utils/SectionHeading';

const Home = () => {
	return (
		<div>
			<IconService />
			<SectionHeading>Services We Offer</SectionHeading>
			<Service />
			<Cta />
			<About />
			<Counter />
			<Footer />
		</div>
	);
};

export default Home;
